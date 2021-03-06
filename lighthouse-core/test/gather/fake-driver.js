/**
 * @license Copyright 2016 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

module.exports = {
  getUserAgent() {
    return Promise.resolve('Fake user agent');
  },
  connect() {
    return Promise.resolve();
  },
  disconnect() {
    return Promise.resolve();
  },
  gotoURL() {
    return Promise.resolve('https://example.com');
  },
  beginEmulation() {
    return Promise.resolve();
  },
  setThrottling() {
    return Promise.resolve();
  },
  dismissJavaScriptDialogs() {
    return Promise.resolve();
  },
  assertNoSameOriginServiceWorkerClients() {
    return Promise.resolve();
  },
  reloadForCleanStateIfNeeded() {
    return Promise.resolve();
  },
  enableRuntimeEvents() {
    return Promise.resolve();
  },
  evaluateScriptOnLoad() {
    return Promise.resolve();
  },
  cleanBrowserCaches() {},
  clearDataForOrigin() {},
  cacheNatives() {
    return Promise.resolve();
  },
  evaluateAsync() {
    return Promise.resolve({});
  },
  registerPerformanceObserver() {
    return Promise.resolve();
  },
  beginTrace() {
    return Promise.resolve();
  },
  endTrace() {
    return Promise.resolve(
      require('../fixtures/traces/progressive-app.json')
    );
  },
  beginDevtoolsLog() {},
  endDevtoolsLog() {
    return require('../fixtures/perflog.json');
  },
  getSecurityState() {
    return Promise.resolve({
      schemeIsCryptographic: true,
    });
  },
  blockUrlPatterns() {
    return Promise.resolve();
  },
};
