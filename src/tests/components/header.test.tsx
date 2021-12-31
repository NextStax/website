/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import Header from '@/components/ui/Header'

describe('Header', () => {
    test('Header renders correct text', () => {
    const { getByTestId } = render(<Header />)
    const header = getByTestId('header')
    expect(header.textContent).toBe('Next.js Project Template')
    })
})