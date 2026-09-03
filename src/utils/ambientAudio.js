// High-fidelity Audio Engine playing real recorded audio files
// Tracks:
// 0: Dark Academia Piano (Erik Satie - Gymnopédie No. 1)
// 0: Golden Brown (The Stranglers)
// 1: Stan (Eminem)
// 2: Babydoll (Dominic Fike)
// 3: Far From Any Road (The Handsome Family)
// 4: Music to Watch Boys To (Lana Del Rey)

class AudioEngine {
  constructor() {
    this.tracks = [
      {
        id: 0,
        name: "golden brown (the stranglers)",
        label: "golden brown",
        src: "/audio/golden_brown.m4a",
      },
      {
        id: 1,
        name: "stan (eminem)",
        label: "stan",
        src: "/audio/stan_eminem.m4a",
      },
      {
        id: 2,
        name: "babydoll (dominic fike)",
        label: "babydoll",
        src: "/audio/babydoll_dominic_fike.m4a",
      },
      {
        id: 3,
        name: "far from any road (the handsome family)",
        label: "far from any road",
        src: "/audio/far_from_any_road.m4a",
      },
      {
        id: 4,
        name: "music to watch boys to (lana del rey)",
        label: "music to watch boys to",
        src: "/audio/music_to_watch_boys_to.m4a",
      },
    ];

    this.currentTrack = 0;
    this.audio = null;
    this.isMuted = false; // Initial state: playing on load
    this.targetVolume = 0.35;
    this.fadeInterval = null;
  }

  getPresets() {
    return this.tracks;
  }

  playTrack(index) {
    const track = this.tracks[index] || this.tracks[0];
    this.currentTrack = index;

    if (this.fadeInterval) clearInterval(this.fadeInterval);

    if (this.audio) {
      try {
        this.audio.pause();
      } catch (e) {}
    }

    this.audio = new Audio(track.src);
    this.audio.loop = true;
    this.audio.preload = "auto";
    this.audio.volume = this.isMuted ? 0 : this.targetVolume;

    if (!this.isMuted) {
      this.audio.play().catch((err) => {
        console.warn("Audio play prevented:", err);
      });
    }
  }

  setMuted(muted) {
    this.isMuted = muted;
    if (!this.audio) {
      if (!muted) {
        this.playTrack(this.currentTrack);
      }
      return;
    }

    if (this.fadeInterval) clearInterval(this.fadeInterval);

    if (muted) {
      // Smooth fade out
      let vol = this.audio.volume;
      this.fadeInterval = setInterval(() => {
        vol -= 0.05;
        if (vol <= 0.02) {
          this.audio.volume = 0;
          this.audio.pause();
          clearInterval(this.fadeInterval);
        } else {
          this.audio.volume = Math.max(0, vol);
        }
      }, 40);
    } else {
      // Smooth fade in
      this.audio.volume = 0;
      this.audio.play().catch(() => {});
      let vol = 0;
      this.fadeInterval = setInterval(() => {
        vol += 0.05;
        if (vol >= this.targetVolume) {
          this.audio.volume = this.targetVolume;
          clearInterval(this.fadeInterval);
        } else {
          this.audio.volume = Math.min(this.targetVolume, vol);
        }
      }, 40);
    }
  }

  toggleMute() {
    this.setMuted(!this.isMuted);
    return this.isMuted;
  }

  stop() {
    if (this.fadeInterval) clearInterval(this.fadeInterval);
    if (this.audio) {
      try {
        this.audio.pause();
      } catch (e) {}
    }
  }
}

export const ambientAudio = new AudioEngine();
