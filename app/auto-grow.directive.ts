import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector: '[autoGrow]',
    host:{
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective{
    /*The line below is the same that declaring
    _el: ElementRef;
    _render: Renderer;
    constructor(el: ElementRef, render: Renderer){
        this._el = el;
        this._render = render;
    }*/
    constructor(private el: ElementRef, private render: Renderer){
    }

    onFocus(){
        this.render.setElementStyle(this.el.nativeElement, 'width', '400');
    }

    onBlur(){
        this.render.setElementStyle(this.el.nativeElement, 'width', '40');
    }
}