/**
 * External dependencies
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import CustomSelectControl from '..';

const customClass = 'amber-skies';

const props = {
	options: [
		{
			key: 'flower1',
			name: 'violets',
		},
		{
			key: 'flower2',
			name: 'crimson clover',
			className: customClass,
		},
		{
			key: 'flower3',
			name: 'poppy',
		},
		{
			key: 'color1',
			name: 'amber',
			className: customClass,
		},
		{
			key: 'color2',
			name: 'aquamarine',
			style: {
				backgroundColor: 'rgb(127, 255, 212)',
				rotate: '13deg',
			},
		},
	],
	__nextUnconstrainedWidth: true,
};

const ControlledCustomSelectControl = ( { options } ) => {
	const [ value, setValue ] = useState( options[ 0 ] );
	return (
		<CustomSelectControl
			{ ...props }
			onChange={ ( { selectedItem } ) => setValue( selectedItem ) }
			value={ options.find( ( option ) => option.key === value.key ) }
		/>
	);
};

describe.each( [
	[ 'uncontrolled', CustomSelectControl ],
	[ 'controlled', ControlledCustomSelectControl ],
] )( 'CustomSelectControl %s', ( ...modeAndComponent ) => {
	const [ , Component ] = modeAndComponent;

	it( 'Should replace the initial selection when a new item is selected', async () => {
		const user = userEvent.setup();

		render( <Component { ...props } /> );

		const currentSelectedItem = screen.getByRole( 'button' );

		expect( currentSelectedItem ).toHaveTextContent( 'violets' );

		await user.click( currentSelectedItem );

		await user.click(
			screen.getByRole( 'option', {
				name: 'crimson clover',
			} )
		);

		expect( currentSelectedItem ).toHaveTextContent( 'crimson clover' );

		await user.click( currentSelectedItem );

		await user.click(
			screen.getByRole( 'option', {
				name: 'poppy',
			} )
		);

		expect( currentSelectedItem ).toHaveTextContent( 'poppy' );
	} );

	it( 'Should keep current selection if dropdown is closed without changing selection', async () => {
		const user = userEvent.setup();

		render( <CustomSelectControl { ...props } /> );

		const currentSelectedItem = screen.getByRole( 'button' );
		expect( currentSelectedItem ).toHaveTextContent( 'violets' );

		await user.tab();
		await user.keyboard( '{enter}' );
		expect( screen.getByRole( 'listbox' ) ).toBeVisible();
		expect( screen.getByRole( 'listbox' ) ).toHaveAttribute(
			'aria-hidden',
			'false'
		);

		await user.keyboard( '{escape}' );
		expect( screen.queryByRole( 'listbox' ) ).not.toBeInTheDocument();

		expect( currentSelectedItem ).toHaveTextContent( 'violets' );
	} );

	it( 'Should apply class only to options that have a className defined', async () => {
		const user = userEvent.setup();

		render( <CustomSelectControl { ...props } /> );

		await user.click( screen.getByRole( 'button', { text: 'violets' } ) );

		// return an array of items _with_ a className added
		const itemsWithClass = props.options.filter(
			( option ) => option.className !== undefined
		);

		// assert against filtered array
		itemsWithClass.map( ( { name } ) =>
			expect( screen.getByRole( 'option', { name } ) ).toHaveClass(
				customClass
			)
		);

		// return an array of items _without_ a className added
		const itemsWithoutClass = props.options.filter(
			( option ) => option.className === undefined
		);

		// assert against filtered array
		itemsWithoutClass.map( ( { name } ) =>
			expect( screen.getByRole( 'option', { name } ) ).not.toHaveClass(
				customClass
			)
		);
	} );

	it( 'Should apply styles only to options that have styles defined', async () => {
		const user = userEvent.setup();
		const customStyles =
			'background-color: rgb(127, 255, 212); rotate: 13deg;';

		render( <CustomSelectControl { ...props } /> );

		await user.click( screen.getByRole( 'button', { text: 'violets' } ) );

		// return an array of items _with_ styles added
		const styledItems = props.options.filter(
			( option ) => option.style !== undefined
		);

		// assert against filtered array
		styledItems.map( ( { name } ) =>
			expect( screen.getByRole( 'option', { name } ) ).toHaveStyle(
				customStyles
			)
		);

		// return an array of items _without_ styles added
		const unstyledItems = props.options.filter(
			( option ) => option.style === undefined
		);

		// assert against filtered array
		unstyledItems.map( ( { name } ) =>
			expect( screen.getByRole( 'option', { name } ) ).not.toHaveStyle(
				customStyles
			)
		);
	} );

	it( 'does not show selected hint by default', () => {
		render(
			<CustomSelectControl
				{ ...props }
				label="Custom select"
				options={ [
					{
						key: 'one',
						name: 'One',
						__experimentalHint: 'Hint',
					},
				] }
			/>
		);
		expect(
			screen.getByRole( 'button', { name: 'Custom select' } )
		).not.toHaveTextContent( 'Hint' );
	} );

	it( 'shows selected hint when __experimentalShowSelectedHint is set', () => {
		render(
			<CustomSelectControl
				{ ...props }
				label="Custom select"
				options={ [
					{
						key: 'one',
						name: 'One',
						__experimentalHint: 'Hint',
					},
				] }
				__experimentalShowSelectedHint
			/>
		);
		expect(
			screen.getByRole( 'button', { name: 'Custom select' } )
		).toHaveTextContent( 'Hint' );
	} );

	describe( 'Keyboard behavior and accessibility', () => {
		it( 'Captures the keypress event and does not let it propagate', async () => {
			const user = userEvent.setup();
			const onKeyDown = jest.fn();

			render(
				<div
					// This role="none" is required to prevent an eslint warning about accessibility.
					role="none"
					onKeyDown={ onKeyDown }
				>
					<CustomSelectControl { ...props } />
				</div>
			);
			const toggleButton = screen.getByRole( 'button' );
			await user.click( toggleButton );

			const customSelect = screen.getByRole( 'listbox' );
			await user.type( customSelect, '{enter}' );

			expect( onKeyDown ).toHaveBeenCalledTimes( 0 );
		} );

		it( 'Should be able to change selection using keyboard', async () => {
			const user = userEvent.setup();

			render( <CustomSelectControl { ...props } /> );

			const currentSelectedItem = screen.getByRole( 'button' );
			expect( currentSelectedItem ).toHaveTextContent( 'violets' );

			await user.tab();
			expect( currentSelectedItem ).toHaveFocus();

			await user.keyboard( '{enter}' );
			await user.keyboard( '{arrowdown}' );
			await user.keyboard( '{enter}' );

			expect( currentSelectedItem ).toHaveTextContent( 'crimson clover' );
		} );

		it( 'Should be able to type characters to select matching options', async () => {
			const user = userEvent.setup();

			render( <CustomSelectControl { ...props } /> );

			const currentSelectedItem = screen.getByRole( 'button' );
			expect( currentSelectedItem ).toHaveTextContent( 'violets' );

			await user.tab();
			await user.keyboard( '{enter}' );
			await user.keyboard( '{a}' );
			await user.keyboard( '{enter}' );

			expect( currentSelectedItem ).toHaveTextContent( 'amber' );
		} );

		it( 'Can change selection with a focused input and closed dropdown if typed characters match an option', async () => {
			const user = userEvent.setup();

			render( <CustomSelectControl { ...props } /> );

			const currentSelectedItem = screen.getByRole( 'button' );
			expect( currentSelectedItem ).toHaveTextContent( 'violets' );

			await user.tab();
			await user.keyboard( '{a}' );
			await user.keyboard( '{q}' );
			await user.keyboard( '{enter}' );

			expect( currentSelectedItem ).toHaveTextContent( 'aquamarine' );
		} );

		it( 'Should have correct aria-selected value for selections', async () => {
			const user = userEvent.setup();

			render( <CustomSelectControl { ...props } /> );

			const currentSelectedItem = screen.getByRole( 'button' );

			await user.click( currentSelectedItem );

			expect(
				screen.getByRole( 'option', {
					name: 'poppy',
					selected: false,
				} )
			).toBeVisible();
			expect(
				screen.getByRole( 'option', {
					name: 'crimson clover',
					selected: false,
				} )
			).toBeVisible();

			expect(
				screen.getByRole( 'option', {
					name: 'violets',
					selected: true,
				} )
			).toBeVisible();

			await user.click( screen.getByRole( 'option', { name: 'poppy' } ) );
			await user.click( currentSelectedItem );
			expect(
				screen.getByRole( 'option', {
					name: 'violets',
					selected: false,
				} )
			).toBeVisible();
			expect(
				screen.getByRole( 'option', {
					name: 'poppy',
					selected: true,
				} )
			).toBeVisible();
		} );

		it( 'Should call custom event handlers', async () => {
			const user = userEvent.setup();
			const onFocusMock = jest.fn();
			const onBlurMock = jest.fn();

			render(
				<CustomSelectControl
					{ ...props }
					onFocus={ onFocusMock }
					onBlur={ onBlurMock }
				/>
			);

			const currentSelectedItem = screen.getByRole( 'button', {
				text: 'violets',
			} );

			await user.tab();

			expect( currentSelectedItem ).toHaveFocus();
			expect( onFocusMock ).toHaveBeenCalledTimes( 1 );

			await user.tab();
			expect( currentSelectedItem ).not.toHaveFocus();
			expect( onBlurMock ).toHaveBeenCalledTimes( 1 );
		} );
	} );
} );
