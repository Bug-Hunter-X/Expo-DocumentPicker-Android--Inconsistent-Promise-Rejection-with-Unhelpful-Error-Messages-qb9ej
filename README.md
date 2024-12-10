## Expo DocumentPicker Android Bug: Inconsistent Promise Rejection

This repository demonstrates a bug in the Expo DocumentPicker API on Android.  After selecting a file, the promise returned by DocumentPicker.getDocumentAsync sometimes rejects without providing a specific error message, making debugging extremely difficult.  The bug is particularly frustrating due to the lack of context in the error, leaving developers to guess at the root cause.

This repository includes example code that reproduces the bug and a proposed solution to improve the user experience and facilitate debugging.

### Steps to Reproduce

1. Run the example code on an Android device or emulator.
2. Open the DocumentPicker using the provided function.
3. Select a file.
4. Observe the inconsistent behavior: sometimes the promise resolves with the expected data, other times it rejects with a vague error message, providing no information about what went wrong.

### Proposed Solution

The proposed solution involves handling the errors more gracefully and logging more detailed information about the error, to assist in identifying its underlying cause. This could include checking for and logging specific error codes or messages returned by the native Android DocumentPicker. 

### Contributing

Feel free to contribute by providing more information about the underlying causes, testing on various Android versions, and offering refined solutions.