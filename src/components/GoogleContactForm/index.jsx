import React from "react";

const GoogleContactForm = () => {
  return (
    <div style={{ maxWidth: "100%", height: "80vh", margin: "0 auto" }}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfkYAKvJSNQue7AnjeQQQhIPtr7sRGMiUahHy9dox1AjYmDnw/viewform?embedded=true"
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="contact me form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleContactForm;
