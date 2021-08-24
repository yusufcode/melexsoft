import { Component, Input } from '@angular/core';
import lightGallery from 'lightgallery';
import * as i0 from "@angular/core";
var _c0 = ["*"];
var LgMethods = {
    onAfterAppendSlide: 'lgAfterAppendSlide',
    onInit: 'lgInit',
    onHasVideo: 'lgHasVideo',
    onContainerResize: 'lgContainerResize',
    onUpdateSlides: 'lgUpdateSlides',
    onAfterAppendSubHtml: 'lgAfterAppendSubHtml',
    onBeforeOpen: 'lgBeforeOpen',
    onAfterOpen: 'lgAfterOpen',
    onSlideItemLoad: 'lgSlideItemLoad',
    onBeforeSlide: 'lgBeforeSlide',
    onAfterSlide: 'lgAfterSlide',
    onPosterClick: 'lgPosterClick',
    onDragStart: 'lgDragStart',
    onDragMove: 'lgDragMove',
    onDragEnd: 'lgDragEnd',
    onBeforeNextSlide: 'lgBeforeNextSlide',
    onBeforePrevSlide: 'lgBeforePrevSlide',
    onBeforeClose: 'lgBeforeClose',
    onAfterClose: 'lgAfterClose',
};
var LightgalleryComponent = /** @class */ (function () {
    function LightgalleryComponent(_elementRef) {
        this._elementRef = _elementRef;
        this.lgInitialized = false;
        this._elementRef = _elementRef;
    }
    LightgalleryComponent.prototype.ngAfterViewChecked = function () {
        if (!this.lgInitialized) {
            this.registerEvents();
            this.LG = lightGallery(this._elementRef.nativeElement, this.settings);
            this.lgInitialized = true;
        }
    };
    LightgalleryComponent.prototype.ngOnDestroy = function () {
        this.LG.destroy();
        this.lgInitialized = false;
    };
    LightgalleryComponent.prototype.registerEvents = function () {
        var _this = this;
        if (this.onAfterAppendSlide) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onAfterAppendSlide, (function (event) {
                _this.onAfterAppendSlide &&
                    _this.onAfterAppendSlide(event.detail);
            }));
        }
        if (this.onInit) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onInit, (function (event) {
                _this.onInit && _this.onInit(event.detail);
            }));
        }
        if (this.onHasVideo) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onHasVideo, (function (event) {
                _this.onHasVideo && _this.onHasVideo(event.detail);
            }));
        }
        if (this.onContainerResize) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onContainerResize, (function (event) {
                _this.onContainerResize &&
                    _this.onContainerResize(event.detail);
            }));
        }
        if (this.onAfterAppendSubHtml) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onAfterAppendSubHtml, (function (event) {
                _this.onAfterAppendSubHtml &&
                    _this.onAfterAppendSubHtml(event.detail);
            }));
        }
        if (this.onBeforeOpen) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onBeforeOpen, (function (event) {
                _this.onBeforeOpen && _this.onBeforeOpen(event.detail);
            }));
        }
        if (this.onAfterOpen) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onAfterOpen, (function (event) {
                _this.onAfterOpen && _this.onAfterOpen(event.detail);
            }));
        }
        if (this.onSlideItemLoad) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onSlideItemLoad, (function (event) {
                _this.onSlideItemLoad && _this.onSlideItemLoad(event.detail);
            }));
        }
        if (this.onBeforeSlide) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onBeforeSlide, (function (event) {
                _this.onBeforeSlide && _this.onBeforeSlide(event.detail);
            }));
        }
        if (this.onAfterSlide) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onAfterSlide, (function (event) {
                _this.onAfterSlide && _this.onAfterSlide(event.detail);
            }));
        }
        if (this.onPosterClick) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onPosterClick, (function (event) {
                _this.onPosterClick && _this.onPosterClick(event.detail);
            }));
        }
        if (this.onDragStart) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onDragStart, (function (event) {
                _this.onDragStart && _this.onDragStart(event.detail);
            }));
        }
        if (this.onDragMove) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onDragMove, (function (event) {
                _this.onDragMove && _this.onDragMove(event.detail);
            }));
        }
        if (this.onDragEnd) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onDragEnd, (function (event) {
                _this.onDragEnd && _this.onDragEnd(event.detail);
            }));
        }
        if (this.onBeforeNextSlide) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onBeforeNextSlide, (function (event) {
                _this.onBeforeNextSlide &&
                    _this.onBeforeNextSlide(event.detail);
            }));
        }
        if (this.onBeforePrevSlide) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onBeforePrevSlide, (function (event) {
                _this.onBeforePrevSlide &&
                    _this.onBeforePrevSlide(event.detail);
            }));
        }
        if (this.onBeforeClose) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onBeforeClose, (function (event) {
                _this.onBeforeClose && _this.onBeforeClose(event.detail);
            }));
        }
        if (this.onAfterClose) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onAfterClose, (function (event) {
                _this.onAfterClose && _this.onAfterClose(event.detail);
            }));
        }
    };
    LightgalleryComponent.ɵfac = function LightgalleryComponent_Factory(t) { return new (t || LightgalleryComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    LightgalleryComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LightgalleryComponent, selectors: [["lightgallery"]], inputs: { settings: "settings", onAfterAppendSlide: "onAfterAppendSlide", onInit: "onInit", onHasVideo: "onHasVideo", onContainerResize: "onContainerResize", onAfterAppendSubHtml: "onAfterAppendSubHtml", onBeforeOpen: "onBeforeOpen", onAfterOpen: "onAfterOpen", onSlideItemLoad: "onSlideItemLoad", onBeforeSlide: "onBeforeSlide", onAfterSlide: "onAfterSlide", onPosterClick: "onPosterClick", onDragStart: "onDragStart", onDragMove: "onDragMove", onDragEnd: "onDragEnd", onBeforeNextSlide: "onBeforeNextSlide", onBeforePrevSlide: "onBeforePrevSlide", onBeforeClose: "onBeforeClose", onAfterClose: "onAfterClose" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function LightgalleryComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return LightgalleryComponent;
}());
export { LightgalleryComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LightgalleryComponent, [{
        type: Component,
        args: [{
                selector: 'lightgallery',
                template: '<ng-content></ng-content>',
                styles: [],
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { settings: [{
            type: Input
        }], onAfterAppendSlide: [{
            type: Input
        }], onInit: [{
            type: Input
        }], onHasVideo: [{
            type: Input
        }], onContainerResize: [{
            type: Input
        }], onAfterAppendSubHtml: [{
            type: Input
        }], onBeforeOpen: [{
            type: Input
        }], onAfterOpen: [{
            type: Input
        }], onSlideItemLoad: [{
            type: Input
        }], onBeforeSlide: [{
            type: Input
        }], onAfterSlide: [{
            type: Input
        }], onPosterClick: [{
            type: Input
        }], onDragStart: [{
            type: Input
        }], onDragMove: [{
            type: Input
        }], onDragEnd: [{
            type: Input
        }], onBeforeNextSlide: [{
            type: Input
        }], onBeforePrevSlide: [{
            type: Input
        }], onBeforeClose: [{
            type: Input
        }], onAfterClose: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRnYWxsZXJ5LWFuZ3VsYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlnaHRnYWxsZXJ5L2FuZ3VsYXIvOS8iLCJzb3VyY2VzIjpbImxpYi9saWdodGdhbGxlcnktYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxZQUFZLE1BQU0sY0FBYyxDQUFDOzs7QUFzQnhDLElBQU0sU0FBUyxHQUFHO0lBQ2Qsa0JBQWtCLEVBQUUsb0JBQW9CO0lBQ3hDLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLGlCQUFpQixFQUFFLG1CQUFtQjtJQUN0QyxjQUFjLEVBQUUsZ0JBQWdCO0lBQ2hDLG9CQUFvQixFQUFFLHNCQUFzQjtJQUM1QyxZQUFZLEVBQUUsY0FBYztJQUM1QixXQUFXLEVBQUUsYUFBYTtJQUMxQixlQUFlLEVBQUUsaUJBQWlCO0lBQ2xDLGFBQWEsRUFBRSxlQUFlO0lBQzlCLFlBQVksRUFBRSxjQUFjO0lBQzVCLGFBQWEsRUFBRSxlQUFlO0lBQzlCLFdBQVcsRUFBRSxhQUFhO0lBQzFCLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLGlCQUFpQixFQUFFLG1CQUFtQjtJQUN0QyxpQkFBaUIsRUFBRSxtQkFBbUI7SUFDdEMsYUFBYSxFQUFFLGVBQWU7SUFDOUIsWUFBWSxFQUFFLGNBQWM7Q0FDL0IsQ0FBQztBQUVGO0lBUUksK0JBQW9CLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBRG5DLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRTFCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFzQkQsa0RBQWtCLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsSUFB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TUFBTSxFQUFFLEVBQUU7YUFDYjs7a0JBUUksS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBsaWdodEdhbGxlcnkgZnJvbSAnbGlnaHRnYWxsZXJ5JztcbmltcG9ydCB7XG4gICAgQWZ0ZXJBcHBlbmRTdWJIdG1sRGV0YWlsLFxuICAgIEFmdGVyQ2xvc2VEZXRhaWwsXG4gICAgQWZ0ZXJPcGVuRGV0YWlsLFxuICAgIEFmdGVyU2xpZGVEZXRhaWwsXG4gICAgQmVmb3JlQ2xvc2VEZXRhaWwsXG4gICAgQmVmb3JlTmV4dFNsaWRlRGV0YWlsLFxuICAgIEJlZm9yZU9wZW5EZXRhaWwsXG4gICAgQmVmb3JlUHJldlNsaWRlRGV0YWlsLFxuICAgIEJlZm9yZVNsaWRlRGV0YWlsLFxuICAgIENvbnRhaW5lclJlc2l6ZURldGFpbCxcbiAgICBEcmFnRW5kRGV0YWlsLFxuICAgIERyYWdNb3ZlRGV0YWlsLFxuICAgIERyYWdTdGFydERldGFpbCxcbiAgICBJbml0RGV0YWlsLFxuICAgIFBvc3RlckNsaWNrRGV0YWlsLFxuICAgIFNsaWRlSXRlbUxvYWREZXRhaWwsXG59IGZyb20gJ2xpZ2h0Z2FsbGVyeS9sZy1ldmVudHMnO1xuaW1wb3J0IHsgTGlnaHRHYWxsZXJ5U2V0dGluZ3MgfSBmcm9tICdsaWdodGdhbGxlcnkvbGctc2V0dGluZ3MnO1xuaW1wb3J0IHsgTGlnaHRHYWxsZXJ5IH0gZnJvbSAnbGlnaHRnYWxsZXJ5L2xpZ2h0Z2FsbGVyeSc7XG5cbmNvbnN0IExnTWV0aG9kcyA9IHtcbiAgICBvbkFmdGVyQXBwZW5kU2xpZGU6ICdsZ0FmdGVyQXBwZW5kU2xpZGUnLFxuICAgIG9uSW5pdDogJ2xnSW5pdCcsXG4gICAgb25IYXNWaWRlbzogJ2xnSGFzVmlkZW8nLFxuICAgIG9uQ29udGFpbmVyUmVzaXplOiAnbGdDb250YWluZXJSZXNpemUnLFxuICAgIG9uVXBkYXRlU2xpZGVzOiAnbGdVcGRhdGVTbGlkZXMnLFxuICAgIG9uQWZ0ZXJBcHBlbmRTdWJIdG1sOiAnbGdBZnRlckFwcGVuZFN1Ykh0bWwnLFxuICAgIG9uQmVmb3JlT3BlbjogJ2xnQmVmb3JlT3BlbicsXG4gICAgb25BZnRlck9wZW46ICdsZ0FmdGVyT3BlbicsXG4gICAgb25TbGlkZUl0ZW1Mb2FkOiAnbGdTbGlkZUl0ZW1Mb2FkJyxcbiAgICBvbkJlZm9yZVNsaWRlOiAnbGdCZWZvcmVTbGlkZScsXG4gICAgb25BZnRlclNsaWRlOiAnbGdBZnRlclNsaWRlJyxcbiAgICBvblBvc3RlckNsaWNrOiAnbGdQb3N0ZXJDbGljaycsXG4gICAgb25EcmFnU3RhcnQ6ICdsZ0RyYWdTdGFydCcsXG4gICAgb25EcmFnTW92ZTogJ2xnRHJhZ01vdmUnLFxuICAgIG9uRHJhZ0VuZDogJ2xnRHJhZ0VuZCcsXG4gICAgb25CZWZvcmVOZXh0U2xpZGU6ICdsZ0JlZm9yZU5leHRTbGlkZScsXG4gICAgb25CZWZvcmVQcmV2U2xpZGU6ICdsZ0JlZm9yZVByZXZTbGlkZScsXG4gICAgb25CZWZvcmVDbG9zZTogJ2xnQmVmb3JlQ2xvc2UnLFxuICAgIG9uQWZ0ZXJDbG9zZTogJ2xnQWZ0ZXJDbG9zZScsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpZ2h0Z2FsbGVyeScsXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICBzdHlsZXM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBMaWdodGdhbGxlcnlDb21wb25lbnQge1xuICAgIHByaXZhdGUgTEchOiBMaWdodEdhbGxlcnk7XG4gICAgcHJpdmF0ZSBsZ0luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLl9lbGVtZW50UmVmID0gX2VsZW1lbnRSZWY7XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0dGluZ3MhOiBMaWdodEdhbGxlcnlTZXR0aW5ncztcbiAgICBASW5wdXQoKSBvbkFmdGVyQXBwZW5kU2xpZGU/OiAoZGV0YWlsOiBBZnRlclNsaWRlRGV0YWlsKSA9PiB2b2lkO1xuICAgIEBJbnB1dCgpIG9uSW5pdD86IChkZXRhaWw6IEluaXREZXRhaWwpID0+IHZvaWQ7XG4gICAgQElucHV0KCkgb25IYXNWaWRlbz86IChkZXRhaWw6IEluaXREZXRhaWwpID0+IHZvaWQ7XG4gICAgQElucHV0KCkgb25Db250YWluZXJSZXNpemU/OiAoZGV0YWlsOiBDb250YWluZXJSZXNpemVEZXRhaWwpID0+IHZvaWQ7XG4gICAgQElucHV0KCkgb25BZnRlckFwcGVuZFN1Ykh0bWw/OiAoZGV0YWlsOiBBZnRlckFwcGVuZFN1Ykh0bWxEZXRhaWwpID0+IHZvaWQ7XG4gICAgQElucHV0KCkgb25CZWZvcmVPcGVuPzogKGRldGFpbDogQmVmb3JlT3BlbkRldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvbkFmdGVyT3Blbj86IChkZXRhaWw6IEFmdGVyT3BlbkRldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvblNsaWRlSXRlbUxvYWQ/OiAoZGV0YWlsOiBTbGlkZUl0ZW1Mb2FkRGV0YWlsKSA9PiB2b2lkO1xuICAgIEBJbnB1dCgpIG9uQmVmb3JlU2xpZGU/OiAoZGV0YWlsOiBCZWZvcmVTbGlkZURldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvbkFmdGVyU2xpZGU/OiAoZGV0YWlsOiBBZnRlclNsaWRlRGV0YWlsKSA9PiB2b2lkO1xuICAgIEBJbnB1dCgpIG9uUG9zdGVyQ2xpY2s/OiAoZGV0YWlsOiBQb3N0ZXJDbGlja0RldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvbkRyYWdTdGFydD86IChkZXRhaWw6IERyYWdTdGFydERldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvbkRyYWdNb3ZlPzogKGRldGFpbDogRHJhZ01vdmVEZXRhaWwpID0+IHZvaWQ7XG4gICAgQElucHV0KCkgb25EcmFnRW5kPzogKGRldGFpbDogRHJhZ0VuZERldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvbkJlZm9yZU5leHRTbGlkZT86IChkZXRhaWw6IEJlZm9yZU5leHRTbGlkZURldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvbkJlZm9yZVByZXZTbGlkZT86IChkZXRhaWw6IEJlZm9yZVByZXZTbGlkZURldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvbkJlZm9yZUNsb3NlPzogKGRldGFpbDogQmVmb3JlQ2xvc2VEZXRhaWwpID0+IHZvaWQ7XG4gICAgQElucHV0KCkgb25BZnRlckNsb3NlPzogKGRldGFpbDogQWZ0ZXJDbG9zZURldGFpbCkgPT4gdm9pZDtcblxuICAgIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmxnSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuTEcgPSBsaWdodEdhbGxlcnkoXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50LFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5sZ0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLkxHLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5sZ0luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWdpc3RlckV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMub25BZnRlckFwcGVuZFNsaWRlKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBMZ01ldGhvZHMub25BZnRlckFwcGVuZFNsaWRlLFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25BZnRlckFwcGVuZFNsaWRlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQWZ0ZXJBcHBlbmRTbGlkZShldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uSW5pdCkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoTGdNZXRob2RzLm9uSW5pdCwgKChcbiAgICAgICAgICAgICAgICBldmVudDogQ3VzdG9tRXZlbnQsXG4gICAgICAgICAgICApID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uSW5pdCAmJiB0aGlzLm9uSW5pdChldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgfSkgYXMgRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25IYXNWaWRlbykge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgTGdNZXRob2RzLm9uSGFzVmlkZW8sXG4gICAgICAgICAgICAgICAgKChldmVudDogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkhhc1ZpZGVvICYmIHRoaXMub25IYXNWaWRlbyhldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uQ29udGFpbmVyUmVzaXplKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBMZ01ldGhvZHMub25Db250YWluZXJSZXNpemUsXG4gICAgICAgICAgICAgICAgKChldmVudDogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNvbnRhaW5lclJlc2l6ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNvbnRhaW5lclJlc2l6ZShldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uQWZ0ZXJBcHBlbmRTdWJIdG1sKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBMZ01ldGhvZHMub25BZnRlckFwcGVuZFN1Ykh0bWwsXG4gICAgICAgICAgICAgICAgKChldmVudDogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkFmdGVyQXBwZW5kU3ViSHRtbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkFmdGVyQXBwZW5kU3ViSHRtbChldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uQmVmb3JlT3Blbikge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgTGdNZXRob2RzLm9uQmVmb3JlT3BlbixcbiAgICAgICAgICAgICAgICAoKGV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQmVmb3JlT3BlbiAmJiB0aGlzLm9uQmVmb3JlT3BlbihldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uQWZ0ZXJPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBMZ01ldGhvZHMub25BZnRlck9wZW4sXG4gICAgICAgICAgICAgICAgKChldmVudDogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkFmdGVyT3BlbiAmJiB0aGlzLm9uQWZ0ZXJPcGVuKGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgICAgfSkgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25TbGlkZUl0ZW1Mb2FkKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBMZ01ldGhvZHMub25TbGlkZUl0ZW1Mb2FkLFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25TbGlkZUl0ZW1Mb2FkICYmIHRoaXMub25TbGlkZUl0ZW1Mb2FkKGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgICAgfSkgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25CZWZvcmVTbGlkZSkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgTGdNZXRob2RzLm9uQmVmb3JlU2xpZGUsXG4gICAgICAgICAgICAgICAgKChldmVudDogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJlZm9yZVNsaWRlICYmIHRoaXMub25CZWZvcmVTbGlkZShldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uQWZ0ZXJTbGlkZSkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgTGdNZXRob2RzLm9uQWZ0ZXJTbGlkZSxcbiAgICAgICAgICAgICAgICAoKGV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQWZ0ZXJTbGlkZSAmJiB0aGlzLm9uQWZ0ZXJTbGlkZShldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uUG9zdGVyQ2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIExnTWV0aG9kcy5vblBvc3RlckNsaWNrLFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Qb3N0ZXJDbGljayAmJiB0aGlzLm9uUG9zdGVyQ2xpY2soZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgICB9KSBhcyBFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vbkRyYWdTdGFydCkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgTGdNZXRob2RzLm9uRHJhZ1N0YXJ0LFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25EcmFnU3RhcnQgJiYgdGhpcy5vbkRyYWdTdGFydChldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uRHJhZ01vdmUpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIExnTWV0aG9kcy5vbkRyYWdNb3ZlLFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25EcmFnTW92ZSAmJiB0aGlzLm9uRHJhZ01vdmUoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgICB9KSBhcyBFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vbkRyYWdFbmQpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIExnTWV0aG9kcy5vbkRyYWdFbmQsXG4gICAgICAgICAgICAgICAgKChldmVudDogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRyYWdFbmQgJiYgdGhpcy5vbkRyYWdFbmQoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgICB9KSBhcyBFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vbkJlZm9yZU5leHRTbGlkZSkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgTGdNZXRob2RzLm9uQmVmb3JlTmV4dFNsaWRlLFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CZWZvcmVOZXh0U2xpZGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25CZWZvcmVOZXh0U2xpZGUoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgICB9KSBhcyBFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vbkJlZm9yZVByZXZTbGlkZSkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgTGdNZXRob2RzLm9uQmVmb3JlUHJldlNsaWRlLFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CZWZvcmVQcmV2U2xpZGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25CZWZvcmVQcmV2U2xpZGUoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgICB9KSBhcyBFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vbkJlZm9yZUNsb3NlKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBMZ01ldGhvZHMub25CZWZvcmVDbG9zZSxcbiAgICAgICAgICAgICAgICAoKGV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQmVmb3JlQ2xvc2UgJiYgdGhpcy5vbkJlZm9yZUNsb3NlKGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgICAgfSkgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25BZnRlckNsb3NlKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBMZ01ldGhvZHMub25BZnRlckNsb3NlLFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25BZnRlckNsb3NlICYmIHRoaXMub25BZnRlckNsb3NlKGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgICAgfSkgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=