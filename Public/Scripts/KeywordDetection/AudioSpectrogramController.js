// SimpleAudioSpectrogramController.js
// Version 0.0.1 
// Event onStartEvent
// script that initializes AudioSpectrogram onAwake and updates it on UpdateEvent

// @input Asset.AudioTrackAsset audioSource {"label" : "Audio Track"}
// @input Component.ScriptComponent audioSpectrogramScript

var audioSpectrogram;

init();

function init() {
    if (!script.audioSpectrogramScript) {
        print("Warning, Audio Spectrogram Script is not set (under advanced checkbox)");
        return false;
    }
    if (!script.audioSource) {
        print("Warning, Audio Track is not set");
        return false;
    }
    audioSpectrogram = script.audioSpectrogramScript.api;
    audioSpectrogram.init(script.audioSource);

    if (script.audioSource.control.isOfType("Provider.MicrophoneAudioProvider")) {
        print("Info, To start using Audio From Microphone enable it at the bottom of the Preview Panel");
        script.audioSource.control.start();
    } else {
        print("Info, You are using Audio Track input instead of Audio From Microphone");
        script.audioSource.control.loops = -1;
    }
    script.createEvent("UpdateEvent").bind(onUpdate);
}

function onUpdate() {
    if (!audioSpectrogram.processAudioFrame()) {
        return;
    }
    audioSpectrogram.updateSpectrogramTexture();
}