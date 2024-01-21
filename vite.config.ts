/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
    test: {
        typecheck: {
            enabled: true,
            // include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
            // only: false
        }
    }
})