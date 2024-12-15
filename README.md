# React 18+ useEffect Cleanup Function Error: Missing Return Statement

This repository demonstrates a subtle error that can occur in React 18 and above when using the `useEffect` hook.  If the cleanup function within `useEffect` is missing a `return` statement, it can lead to unexpected behavior or silent errors.

## The Bug

The issue stems from an incomplete cleanup function in a `useEffect` hook.  React 18+ will throw an error in strict mode.  Strict mode helps catch unexpected behavior but may not always provide a helpful error message.

The `bug.js` file showcases this error.  Running this code might not immediately show obvious problems, but it can lead to memory leaks or unintended side effects if cleanup logic is required.