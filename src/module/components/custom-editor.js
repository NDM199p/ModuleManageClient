import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function CustomEditor(props) {
  return <CKEditor editor={ClassicEditor} {...props} />;
}

export default CustomEditor;
