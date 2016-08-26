/**
 * Copyright (c) 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

import buildSubCommands from './_build-sub-commands.js';

export let {run, setFlags} = buildSubCommands('access', {
  async public(): Promise<void> {
    throw new Error('TODO');
  },

  async restricted(): Promise<void> {
    throw new Error('TODO');
  },

  async grant(): Promise<void> {
    throw new Error('TODO');
  },

  async revoke(): Promise<void> {
    throw new Error('TODO');
  },

  async lsPackages(): Promise<void> {
    throw new Error('TODO');
  },

  async lsCollaborators(): Promise<void> {
    throw new Error('TODO');
  },

  async edit(): Promise<void> {
    throw new Error('TODO');
  },
});