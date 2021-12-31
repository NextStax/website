/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react'
import SubHeader from '@/components/SubHeader'

describe('SubHeader', () => {
    test('SubHeader renders correct text', () => {
        const { getByTestId } = render(<SubHeader />)
        const subheader = getByTestId('subheader')
        expect(subheader.textContent).toBe('Select your land')
    })
})