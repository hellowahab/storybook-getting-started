import { storiesOf } from "@storybook/react";
import React from "react";
import MajorBanner from "../components/major.banner"
import MinorBanner from "../components/minor.banner"
import { withInfo } from "@storybook/addon-info";
import { text } from "@storybook/addons";
import withSeeAlso from "../seeAlso";

storiesOf("Component | Banner/Major", module) 
    .addDecorator(withSeeAlso)
    .addParameters({
        info:{
            text: `
            ### When to use 
            `,           
        },
        seeAlso: {
            label: "Minor Banner", story: "Component | Banner/Minor"
        }
    })
    .add("With Only Title", () => (
        <MajorBanner title="Banner Title"
        photo="People Outdoors/Shutterstock_116403520.jpg" />
    ))
    .add("With all Text Options", () => {
        const title = text('Title','Banner Title');
        return(
        <MajorBanner 
        photo="People Outdoors/Shutterstock_116403520.jpg"
        title={title}
        subtitle="Banner SubTitle"
        body="Banner Body"
        />
    )});
    
storiesOf("Component | Banner/Minor", module)
        .addParameters({
            info: {
                inline: false,
            },
        })
        .add("No Pictures", () => (
            <MinorBanner
            title="Banner Title"
            subtitle="Banner SubTitle"
            body="Banner Body"/>, {
                info: {
                    inline: false,
                },
            }
        ))
        .add("With Pictures", () => (
            <MinorBanner
            title="Banner Title"
            subtitle="Banner SubTitle"
            body="Banner Body"
            leftPhoto="Products/boots/shutterstock_66842440.jpg"
            rightPhoto="Products/boots/shutterstock_1121278055.jpg"/>            
        ));
        