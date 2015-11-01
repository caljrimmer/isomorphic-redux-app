import React, { Component } from 'react';

class Home extends Component {

  render() {
    return (

      	<div className="posts">
  
  			<div className="post">
			    <h1 className="post-title">Introducing Redux Universal example</h1>
    			<p>The theme has been based on <a href="http://lanyon.getpoole.com/">Lanyon</a> which in turn is based on <a href="http://getpoole.com">Poole</a>.</p>

				<h3>Template features</h3>

				<ul>
					<li>Complete setup included (layouts, api calls, 404, static content and stateful content</li>
					<li>Mobile friendly design and development</li>
					<li>Easily scalable text and component sizing with <code>rem</code> units in the CSS</li>
					<li>Support for a wide gamut of HTML elements</li>
				</ul>

				<h3>Code features</h3>

				<ul>
					<li>Toggleable sliding sidebar (built with only CSS) via link in top corner</li>
					<li>Sidebar includes support for textual modules and active link support</li>
					<li>Isomorphic/Universal rendering with express as server</li>
					<li>ES6/ES7 syntax with Babel transforms</li>
					<li>Example Webpack setup</li>
					<li>Redux dev-tools and logging middleware</li>
				</ul>

				<h3>Browser support</h3>

				<p>This is a forward-thinking project. In addition to the latest versions of Chrome, Safari (mobile and desktop), and Firefox, it is only compatible with Internet Explorer 9 and above.</p>

			</div>
  
		  	<div className="post">
			    <h1 className="post-title">Example content</h1>

			    <div className="message">
				  	This is an example content block that shows several types of HTML content supported in this theme.
				</div>

				<p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. <em>Aenean eu leo quam.</em> Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>

				<blockquote>
					<p>Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
				</blockquote>

				<p>Etiam porta <strong>sem malesuada magna</strong> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>

				<h2>Inline HTML elements</h2>

				<p>HTML defines a long list of available inline tags, a complete list of which can be found on the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla Developer Network</a>.</p>

				<ul>
					<li><strong>To bold text</strong>, use <code>&lt;strong&gt;</code>.</li>
					<li><em>To italicize text</em>, use <code>&lt;em&gt;</code>.</li>
					<li>Abbreviations, like <abbr title="HyperText Markup Langage">HTML</abbr> should use <code>&lt;abbr&gt;</code>, with an optional <code>title</code> attribute for the full phrase.</li>
					<li>Citations, like <cite>— Mark otto</cite>, should use <code>&lt;cite&gt;</code>.</li>
					<li><del>Deleted</del> text should use <code>&lt;del&gt;</code> and <ins>inserted</ins> text should use <code>&lt;ins&gt;</code>.</li>
					<li>Superscript <sup>text</sup> uses <code>&lt;sup&gt;</code> and subscript <sub>text</sub> uses <code>&lt;sub&gt;</code>.</li>
				</ul>

				<p>Most of these elements are styled by browsers with few modifications on our part.</p>

				<h2>Heading</h2>

				<p>Vivamus sagittis lacus vel augue rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>

				<h3>Code</h3>

				<p>Cum sociis natoque penatibus et magnis dis <code>code element</code> montes, nascetur ridiculus mus.</p>

				<h3>Lists</h3>

				<ul>
					<li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
					<li>Donec id elit non mi porta gravida at eget metus.</li>
					<li>Nulla vitae elit libero, a pharetra augue.</li>
				</ul>

				<p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>

				<ol>
					<li>Vestibulum id ligula porta felis euismod semper.</li>
					<li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
					<li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
				</ol>

				<p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>

				<dl>
					<dt>HyperText Markup Language (HTML)</dt>
					<dd>The language used to describe and define the content of a Web page</dd>

					<dt>Cascading Style Sheets (CSS)</dt>
					<dd>Used to describe the appearance of Web content</dd>

					<dt>JavaScript (JS)</dt>
					<dd>The programming language used to build advanced Web sites and applications</dd>
				</dl>

				<h3>Tables</h3>

				<p>Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

				<table>
				  <thead>
				    <tr>
				      <th>Name</th>
				      <th>Upvotes</th>
				      <th>Downvotes</th>
				    </tr>
				  </thead>
				  <tfoot>
				    <tr>
				      <td>Totals</td>
				      <td>21</td>
				      <td>23</td>
				    </tr>
				  </tfoot>
				  <tbody>
				    <tr>
				      <td>Alice</td>
				      <td>10</td>
				      <td>11</td>
				    </tr>
				    <tr>
				      <td>Bob</td>
				      <td>4</td>
				      <td>3</td>
				    </tr>
				    <tr>
				      <td>Charlie</td>
				      <td>7</td>
				      <td>9</td>
				    </tr>
				  </tbody>
				</table>

  			</div>
  		</div>
  
    );
  }
}

export default Home;