/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
type StepTarget = ['danggn', 'back'][number];

interface BridgeImplementer {
  // eslint-disable-next-line no-unused-vars
  step: (target: StepTarget) => void;
}

export class AndroidBridge implements BridgeImplementer {
  step(target: StepTarget) {
    window.MashupBridge.step(target);
  }
}
export class AppleBridge implements BridgeImplementer {
  step(target: StepTarget) {
    window.webkit.messageHandlers.mashupBridge.postMessage({
      step: target,
    });
  }
}

export class WebviewHandler {
  protected bridge: BridgeImplementer;

  constructor(bridge: BridgeImplementer) {
    this.bridge = bridge;
  }

  step(target: StepTarget) {
    this.bridge.step(target);
  }
}
