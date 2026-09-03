// Web Audio API generative ambient synthesizer
// Produces atmospheric drone soundscapes matching jia.build without external files

class AmbientAudioEngine {
  constructor() {
    this.ctx = null;
    this.oscillators = [];
    this.gainNode = null;
    this.filterNode = null;
    this.lfo = null;
    this.lfoGain = null;
    this.isPlaying = false;
    this.currentTrack = 0;
    this.isMuted = true;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return false;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return true;
  }

  getPresets() {
    return [
      {
        id: 0,
        name: "things i am afraid of (august)",
        shortName: "1",
        frequencies: [130.81, 196.00, 261.63, 311.13, 392.00],
        filterFreq: 420,
        lfoSpeed: 0.15,
        type: "sine",
      },
      {
        id: 1,
        name: "hiawatha hill, favorite place in the world",
        shortName: "2",
        frequencies: [92.50, 138.59, 185.00, 277.18],
        filterFreq: 360,
        lfoSpeed: 0.08,
        type: "triangle",
      },
      {
        id: 2,
        name: "signals under uncertainty",
        shortName: "3",
        frequencies: [73.42, 110.00, 164.81, 220.00],
        filterFreq: 480,
        lfoSpeed: 0.22,
        type: "sine",
      },
      {
        id: 3,
        name: "nocturnal sf (calm night)",
        shortName: "4",
        frequencies: [110.00, 164.81, 246.94, 329.63],
        filterFreq: 520,
        lfoSpeed: 0.12,
        type: "sine",
      },
    ];
  }

  playTrack(index) {
    if (!this.init()) return;
    this.stop();

    const presets = this.getPresets();
    const preset = presets[index] || presets[0];
    this.currentTrack = index;
    const now = this.ctx.currentTime;

    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.0001, now);
    this.gainNode.gain.exponentialRampToValueAtTime(this.isMuted ? 0.0001 : 0.08, now + 1.2);

    this.filterNode = this.ctx.createBiquadFilter();
    this.filterNode.type = "lowpass";
    this.filterNode.frequency.setValueAtTime(preset.filterFreq, now);

    this.lfo = this.ctx.createOscillator();
    this.lfoGain = this.ctx.createGain();
    this.lfo.frequency.setValueAtTime(preset.lfoSpeed, now);
    this.lfoGain.gain.setValueAtTime(80, now);
    this.lfo.connect(this.lfoGain);
    this.lfoGain.connect(this.filterNode.frequency);
    this.lfo.start();

    this.oscillators = preset.frequencies.map((freq, i) => {
      const osc = this.ctx.createOscillator();
      const voiceGain = this.ctx.createGain();
      osc.type = preset.type;
      const detune = (i % 2 === 0 ? 1 : -1) * (i * 3.5);
      osc.frequency.setValueAtTime(freq, now);
      osc.detune.setValueAtTime(detune, now);
      voiceGain.gain.setValueAtTime(1 / preset.frequencies.length, now);

      osc.connect(voiceGain);
      voiceGain.connect(this.filterNode);
      osc.start();
      return osc;
    });

    this.filterNode.connect(this.gainNode);
    this.gainNode.connect(this.ctx.destination);
    this.isPlaying = true;
  }

  stop() {
    if (this.oscillators.length > 0) {
      this.oscillators.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch (e) {}
      });
      this.oscillators = [];
    }
    if (this.lfo) {
      try {
        this.lfo.stop();
        this.lfo.disconnect();
      } catch (e) {}
      this.lfo = null;
    }
    this.isPlaying = false;
  }

  setMuted(muted) {
    this.isMuted = muted;
    if (!this.gainNode || !this.ctx) return;
    const now = this.ctx.currentTime;
    this.gainNode.gain.cancelScheduledValues(now);
    if (muted) {
      this.gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
    } else {
      if (!this.isPlaying) {
        this.playTrack(this.currentTrack);
      } else {
        this.gainNode.gain.exponentialRampToValueAtTime(0.08, now + 0.6);
      }
    }
  }

  toggleMute() {
    this.setMuted(!this.isMuted);
    return this.isMuted;
  }
}

export const ambientAudio = new AmbientAudioEngine();
