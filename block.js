/**
 * Example Block Two
 *
 * https://github.com/modularwp/gutenberg-example-block-two
 */
( function() {
	var __                = wp.i18n.__; // The __() function for internationalization.
	var el                = wp.element.createElement; // The wp.element.createElement() function to create elements.
	var registerBlockType = wp.blocks.registerBlockType; // The registerBlockType() function to register blocks.
	var Editable          = wp.blocks.Editable; // For creating editable elements.

	/**
	 * Register block
	 *
	 * @param  {string}   name     Block name.
	 * @param  {Object}   settings Block settings.
	 * @return {?WPBlock}          Block itself, if registered successfully,
	 *                             otherwise "undefined".
	 */
	registerBlockType(
		'mdlr/example-block-two', // Block name. Must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
		{
			title: __( 'Example Block Two', 'mdlr_textdomain' ), // Block title. __() function allows for internationalization.
			icon: 'paperclip', // Block icon from Dashicons. https://developer.wordpress.org/resource/dashicons/.
			category: 'common', // Block category. Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
			attributes: {
				content: {
					type: 'text',
					default: 'Example Block Two',
				},
			},

			// Defines the block within the editor.
			edit: function( props ) {
				var content = props.attributes.content;

				function onChangeContent( updatedContent ) {
					props.setAttributes( { content: updatedContent } );
				}

				return el(
					Editable,
					{
						tagName: 'p',
						className: props.className,
						value: content,
						onChange: onChangeContent
					},
				);
			},

			// Defines the saved block.
			save: function( props ) {
				var content = props.attributes.content;

				return el(
					'p',
					{
						className: props.className,
					},
					content
				);
			},
		}
	);
})();
