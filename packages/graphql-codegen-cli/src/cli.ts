#!/usr/bin/env node

import { generate } from './generate-and-save';
import { cliError } from './utils/cli-error';
import { createConfig } from './config';

generate(createConfig())
  .then(() => {
    process.exit(0);
  })
  .catch(cliError);
