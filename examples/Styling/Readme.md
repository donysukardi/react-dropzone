By default, the Dropzone component picks up some default styling to get you started. You can customize `<Dropzone>` by specifying a `style`, `activeStyle` or `rejectStyle` which is applied when a file is dragged over the zone. You can also specify `className`,  `activeClassName` or `rejectClassName` if you would rather style using CSS.

## Updating styles and contents based on user input

By providing a function that returns the component's children you can not only style Dropzone appropriately but also render appropriate content.

```
<Dropzone
  accept="image/png"
>
  {({ getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles, rejectedFiles }) => (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragAccept && "This file is authorized"}
      {isDragReject && "This file is not authorized"}
      {!isDragActive && ((acceptedFiles.length || rejectedFiles.length)
      ? `Accepted ${acceptedFiles.length}, rejected ${rejectedFiles.length} files`
      : "Try dropping some files.")}
    </div>
  )}
</Dropzone>
```
