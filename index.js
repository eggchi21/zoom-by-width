export default class ZoomByWidth {
    /**
     * コンストラクタ
     */
    constructor(settings) {
        this.elements = settings.elements || document.body;
        this.maxWidthSize = settings.maxWidthSize || 1280;
        this.minWidthSize = settings.minWidthSize || 560;
    }

    /**
     * init
     */
    init() {
        window.addEventListener('resize', () => this.windowResize());
    }

    /**
     * 要素のズーム値を変更する
     */
    windowResize() {
        const innerWidth = window.innerWidth;
        let currentWidthLine = innerWidth;

        if (innerWidth > this.maxWidthSize) {
            currentWidthLine = this.maxWidthSize;
        } else if (innerWidth < this.minWidthSize) {
            currentWidthLine = this.minWidthSize;
        }

        let zoom = innerWidth / currentWidthLine;

        for (let i = 0; i < this.length; i++) {
            this.zoomTargetElements[i].style.zoom = zoom;
        }
    }
}