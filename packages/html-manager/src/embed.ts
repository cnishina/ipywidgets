// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
    HTMLManager
} from './index';

import {
    renderWidgets
} from './libembed';

interface CustomWindow extends Window {
    _jupyter_widget_embedder: boolean;
}

// Render the widgets that we can
if (!(window as CustomWindow)._jupyter_widget_embedder) {
   (window as CustomWindow)._jupyter_widget_embedder = true;
    window.addEventListener('load', () => {
        renderWidgets(() => new HTMLManager())
    });
}
