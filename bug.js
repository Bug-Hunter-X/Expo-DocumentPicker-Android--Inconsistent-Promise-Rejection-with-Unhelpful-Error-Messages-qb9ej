This bug occurs when using the Expo DocumentPicker API on Android.  After selecting a file, the promise sometimes rejects with a generic error message, providing no helpful information about the cause. This makes debugging extremely difficult.