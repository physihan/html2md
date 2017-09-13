import React, { Component } from 'react';
import md from 'react-markings';
class Example extends Component {
    render() {
        return (
            <div>
                {md`
                # react-markings
            
                > Markdown in components, components in markdown
            
                - Allows you to write markdown using [commonmark.js](https://github.com/commonmark/commonmark.js)
                - Renders markdown as React elements using [commonmark-react-renderer](https://github.com/rexxars/commonmark-react-renderer)
                - Embed React components inside your markdown (in any paragraph position) like this:www
            
           
              `}
              <math> 
              
                <mi> y </mi>  
              
                <mi> sin </mi>
              
                <mi mathvariant="monospace"> x </mi>
              
                <mi mathvariant="bold"> &pi; </mi>
              
              </math>
            </div>
        );
    }
}

export default Example;