import React from "react";
// import JSONSchemaForm from "react-jsonschema-form";
import JSONSchemaForm from "@rjsf/core";
// import "bootstrap/dist/css/bootstrap.css";

const postSchema = {
  type: "object",
  properties: {
    title: {
      title: "Name",
      type: "string",
      minLength: 10,
      maxLength: 140,
    },
    slug: {
      title: "Slug",
      type: "string",
      pattern: "^[a-z0-9-]+$",
    },
    published: {
      title: "Published",
      type: "string",
      format: "date-time",
    },
    content: {
      title: "Content",
      type: "string",
    },
  },
  required: ["title", "slug", "published", "content"],
};

export default function Form({ onSubmit }) {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <JSONSchemaForm onSubmit={onSubmit} schema={postSchema} />
        </div>
      </div>
    </div>
  );
}
