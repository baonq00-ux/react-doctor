// User-facing diagnostic strings emitted by the `exhaustive-deps` rule.
// Kept beside the rule (same bucket directory) so authors editing
// wording don't need to scroll past 900 lines of analysis logic;
// otherwise behavior-neutral.

export const buildMissingDepMessage = (hookName: string, depName: string): string =>
  `React Hook \`${hookName}\` is missing dependency \`${depName}\` — list it in the dependency array, or call the hook unconditionally.`;

export const buildUnnecessaryDepMessage = (hookName: string, depName: string): string =>
  `React Hook \`${hookName}\` has an unnecessary dependency \`${depName}\` — it isn't referenced inside the callback.`;

export const buildDuplicateDepMessage = (hookName: string, depName: string): string =>
  `React Hook \`${hookName}\` has duplicate dependency \`${depName}\`.`;

export const buildLiteralDepMessage = (hookName: string): string =>
  `React Hook \`${hookName}\` was passed a literal as a dependency. Literals never change so they cannot trigger an update — remove them from the dependency array.`;

export const buildRefCurrentDepMessage = (hookName: string, depName: string): string =>
  `React Hook \`${hookName}\` shouldn't include \`${depName}\` in the dependency array — mutable values like \`.current\` aren't valid deps; depend on \`${depName.replace(/\.current$/, "")}\` itself instead.`;

export const buildNonArrayDepsMessage = (hookName: string): string =>
  `React Hook \`${hookName}\` has a second argument which is not an array literal. This means oxlint cannot statically verify whether the dependencies are exhaustive — replace the variable with an inline array.`;

export const buildMissingDepArrayMessage = (hookName: string): string =>
  `React Hook \`${hookName}\` does nothing when called with only one argument — pass a dependency array as the second argument.`;

export const buildMissingCallbackMessage = (hookName: string): string =>
  `React Hook \`${hookName}\` requires an effect callback — pass a function as the first argument.`;

export const buildEffectEventDepMessage = (depName: string): string =>
  `Functions returned from \`useEffectEvent\` must not be included in the dependency array. Remove \`${depName}\` from the list.`;

export const buildSpreadDepMessage = (hookName: string): string =>
  `React Hook \`${hookName}\` has a spread element in its dependency array. This means oxlint cannot statically verify whether the dependencies are exhaustive.`;

export const buildComplexDepMessage = (hookName: string): string =>
  `React Hook \`${hookName}\` has a complex expression in the dependency array. Extract it to a separate variable so it can be statically checked.`;

export const buildAsyncEffectMessage = (hookName: string): string =>
  `React Hook \`${hookName}\` received an async callback. Put the async function inside the effect instead.`;

export const buildUnknownCallbackMessage = (hookName: string): string =>
  `React Hook \`${hookName}\` received a function whose dependencies are unknown. Pass an inline function instead.`;

export const buildUnstableDepMessage = (hookName: string, depName: string): string =>
  `The \`${depName}\` value makes the dependencies of \`${hookName}\` change on every render. Move it inside the hook callback or wrap it in its own memoization hook.`;

export const buildSetStateWithoutDepsMessage = (hookName: string, setterName: string): string =>
  `React Hook \`${hookName}\` contains a call to \`${setterName}\`. Without a dependency array, this can lead to an infinite chain of updates.`;

export const buildRefCleanupMessage = (depName: string): string =>
  `The ref value \`${depName}\` will likely have changed by the time this effect cleanup function runs. Copy it to a variable inside the hook callback and use that variable in cleanup.`;

export const buildAssignmentMessage = (name: string): string =>
  `Assignments to the \`${name}\` variable from inside a React Hook will be lost after each render. Store it in a ref to preserve the value over time.`;
