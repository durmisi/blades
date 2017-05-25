export class Blade {
    public name: string;
    public title: string;
    public subTitle: string;
    public fullScreenMode: boolean;
    public iconClass: string;

    public bladeSize: BladeSize;
    public bladeLayout: BladeLayout;
    public bladeCommands: Array<BladeCommand>;

    constructor() {
        this.fullScreenMode = false;
        this.bladeSize = BladeSize.Medium;
        this.bladeLayout = BladeLayout.OneColumn;
        this.bladeCommands = new Array<BladeCommand>();
    }
}

export enum BladeLayout {
    OneColumn = 1,
    TwoColumns,
    ThreeColumns,
}

export enum BladeSize {
    Small = 1,
    Medium,
    Large,
    XLarge,
    FullScreen,
}

export abstract class BladeCommand {
    public title: string;
    public abstract execute(): void;

    constructor(title: string) {
        this.title = title;
    }
}

export class OpenBladeCommand extends BladeCommand {
    public bladeName: string;
    constructor(title: string, bladeName: string) {
        super(title);
        this.bladeName = bladeName;
    }
    execute(): void { throw new Error('Not implemented'); }

}

export class OpenLinkCommand extends BladeCommand {

    public link: string;
    constructor(title: string, link: string) {
        super(title);
        this.link = link;
    }
    execute(): void {
        window.location.href = this.link;
    }
}

export class PublishEventCommand extends BladeCommand {
    public event: string;
    constructor(title: string, event: string) {
        super(title);
        this.event = event;
    }
    execute(): void { throw new Error('Not implemented'); }
}