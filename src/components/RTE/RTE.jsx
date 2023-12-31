/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Editor } from "@tinymce/tinymce-react"
import { Controller } from "react-hook-form";

const RTE = ({ name, control, label, defaultValues = "" }) => {
    return (
        <div className="w-full">
            {label && <label className="inline-block pl-1 mb-1" htmlFor={name}>
                {label}
            </label>}

            <Controller
                name={name || "Content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        initialValue={defaultValues}
                        init={{
                            branding: false,
                            height: 500,
                            menubar: true,
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "image",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "code",
                                "help",
                                "wordcount",
                                "anchor",
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                        onEditorChange={onChange}

                    />
                )}
            />
        </div>
    )
}

export default RTE;