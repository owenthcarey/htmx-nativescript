import { Property, ViewBase } from '@nativescript/core';
import { Http } from '@nativescript/core';
import { createViewModel } from './main-view-model';

async function makeHttpRequest(method, url) {
  try {
    switch (method) {
      case 'GET':
        return await Http.getString(url);
      case 'POST':
        // Add logic for POST request
        break;
      case 'PUT':
        // Add logic for PUT request
        break;
      case 'PATCH':
        // Add logic for PATCH request
        break;
      case 'DELETE':
        // Add logic for DELETE request
        break;
      default:
        throw new Error('Unsupported method');
    }
  } catch (error) {
    console.error('HTTP Request Failed:', error);
  }
}

// ----------------------------------------
// HTMX HTTP-request properties
// ----------------------------------------

const hxGetProperty = new Property({
  name: 'hx-get',
  valueChanged: async (view, oldValue, newValue) => {
    // Implement the logic for the GET HTTP request
    console.log('GET URL:', newValue);
    const response = await makeHttpRequest('GET', newValue);
    console.log('HTTP Response:', response);
  },
})
hxGetProperty.register(ViewBase);

const hxPostProperty = new Property({
  name: 'hx-post',
  valueChanged: (view, oldValue, newValue) => {
    // Implement the logic for the POST HTTP request
    console.log('POST URL:', newValue);
  },
});
hxPostProperty.register(ViewBase);

const hxPutProperty = new Property({
  name: 'hx-put',
  valueChanged: (view, oldValue, newValue) => {
    // Implement the logic for the PUT HTTP request
    console.log('PUT URL:', newValue);
  },
});
hxPutProperty.register(ViewBase);

const hxPatchProperty = new Property({
  name: 'hx-patch',
  valueChanged: (view, oldValue, newValue) => {
    // Implement the logic for the PATCH HTTP request
    console.log('PATCH URL:', newValue);
  },
});
hxPatchProperty.register(ViewBase);

const hxDeleteProperty = new Property({
  name: 'hx-delete',
  valueChanged: (view, oldValue, newValue) => {
    // Implement the logic for the DELETE HTTP request
    console.log('DELETE URL:', newValue);
  },
});
hxDeleteProperty.register(ViewBase);

// ----------------------------------------
// HTMX event-trigger properties
// ----------------------------------------

const hxTriggerProperty = new Property({
  name: 'hx-trigger',
  valueChanged: (view, oldValue, newValue) => {
    // Implement the logic for attaching event listeners
    console.log(newValue);
  },
});
hxTriggerProperty.register(ViewBase);

// ----------------------------------------
// HTMX target properties
// ----------------------------------------

const hxTargetProperty = new Property({
  name: 'hx-target',
  valueChanged: (view, oldValue, newValue) => {
    // Implement the logic for targeting the response
    console.log(newValue);
  },
});
hxTargetProperty.register(ViewBase);

// ----------------------------------------
// HTMX content-swapping properties
// ----------------------------------------

const hxSwapProperty = new Property({
  name: 'hx-swap',
  valueChanged: (view, oldValue, newValue) => {
    // Implement the logic for swapping content
    console.log(newValue);
  },
});
hxSwapProperty.register(ViewBase);

export function onNavigatingTo(args) {
  const page = args.object
  page.bindingContext = createViewModel()
}
