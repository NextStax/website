/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react'
import Content from '@/components/ui/Content'

describe('Content', () => {
    test('Content renders correct text', () => {
        const { getByTestId } = render(<Content />)
        const content = getByTestId('content')
        expect(content.textContent).toBe('A simple Next.js application with TypeScript, Tailwind CSS and testing suite enabled')
    })
})