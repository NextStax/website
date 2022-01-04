/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe('Header', () => {
	test('Header renders correct text', () => {
		const { getByTestId } = render(<Header />)
		const header = getByTestId('header')
		expect(header.textContent).toBe('Futura City')
	})

	test('SubHeader renders correct text', () => {
		const { getByTestId } = render(<Header />)
		const subheader = getByTestId('subheader')
		expect(subheader.textContent).toBe('Select your land')
	})
})
