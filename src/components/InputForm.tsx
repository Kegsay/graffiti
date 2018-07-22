import * as React from "react";
import 'whatwg-fetch';

export interface InputFormProps { }
export interface InputFormState { url: string, comments: string }

export class InputForm extends React.Component<InputFormProps, InputFormState> {

    constructor(props: any, context: any) {
        super(props, context);
        this.onSubmit = this.onSubmit.bind(this);
        this.onURLChange = this.onURLChange.bind(this);
        this.onCommentsChange = this.onCommentsChange.bind(this);
        this.state = {
            url: "",
            comments: ""
        };
    }

    async onSubmit(ev: React.FormEvent) {
        ev.preventDefault();
        // TODO: validation of url
        console.log("onSubmit ", this.state.url);
        console.log("comments: ", this.state.comments);
        try {
            const res: Response = await fetch("/spray", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    url: this.state.url,
                    comments: this.state.comments,
                })
            });
            if (res.status !== 200) {
                console.error("Error:", res.status);
            } else {
                console.log("OK!");
            }
        }
        catch (err) { // network errors
            console.error(err);
        }
    }

    onURLChange(ev: any) {
        this.setState({
            url: ev.target.value
        });
    }

    onCommentsChange(ev: any) {
        this.setState({
            comments: ev.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    URL: <input type="text" value={this.state.url} onChange={this.onURLChange}></input>
                </label>
                <label>
                    Comments: <textarea value={this.state.comments} onChange={this.onCommentsChange}></textarea>
                </label>
                <input type="submit" value="Submit"></input> 
            </form>
        )
    }
}