import React from 'react';
import marked from 'marked';

export default class MarkdownElement extends React.Component {
  constructor(props) {
    super(props);

    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
    });
  }
  render() {
    const { text } = this.props,
      html = marked(text || '');

    return (
      <div className='markdown' style={{padding: '30px'}}>
        <span dangerouslySetInnerHTML={ { __html: html } } />
      </div>
    );
  }
}
