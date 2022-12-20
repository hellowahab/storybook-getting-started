import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import CallToAction from "../components/form/cta-button";

storiesOf("Building Block | Button", module)
    .add("Call to Action", () => (
        <CallToAction label="Submit"
        onClick={action("button-click")}/>
    ));