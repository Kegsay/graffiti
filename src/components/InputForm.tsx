import * as React from "react";

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

    onSubmit(ev: React.FormEvent) {
        ev.preventDefault();
        // TODO: validation of url
        console.log("onSubmit ", this.state.url);
        console.log("comments: ", this.state.comments);
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