// Type definitions for cordova.plugins.backgroundMode

/// <reference types="cordova"/>

interface BackgroundMode {
    enable(): void,
    disable(): void,
    setEnabled(
        enable: boolean
    ): void,
    isIdle(
        successCallback: (isIdle: boolean) => void,
        errorCallback: (error) => void
    ): void,
    configure( options: {[key: string]: string}): void,
    moveToBackground(): void,
    moveToForeGround(): void,
    isScreenOff(
        callback: (isScreenOff: boolean) => void
    ): void,
    unlock(): void,
    isActive(): boolean
}

interface CordovaPlugins {
    backgroundMode: BackgroundMode
}
