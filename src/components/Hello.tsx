import * as React from "react";
import { InputForm } from './InputForm';

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <div>
             <h1>Leave a comment on any page!</h1>
             <InputForm />
        </div>
    }
}