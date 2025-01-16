
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Router } from './components/Router';
import { getCurrentPath } from './utils';
import { Route } from './components/Route';
import { Link } from './components/Link';

vi.mock('./utils.js', () => ({
    getCurrentPath: vi.fn()
}))


describe('Router', () => {
    beforeEach(() => {
        cleanup()
        vi.clearAllMocks
    })
    it('should work', () => {
        render(<Router routes={[]} />);
        expect(true).toBeTruthy();
    })

    it('should render 404 if no routes match', () => {
        render(<Router routes={[]} defaultComponent={() => <h1>404</h1> } />);
        expect(screen.getByText('404')).toBeTruthy();
    })

    it('should render the component of the first route that matches', () => {
        getCurrentPath.mockReturnValue('/about');
        
        const routes = [
            {
                path: '/',
                Component: () => <h1>Home</h1>
            },
            {
                path: '/about',
                Component: () => <h1>About</h1>
            }
        ]

        render(<Router routes={routes} />);
        expect(screen.getByText('About')).toBeTruthy();
    })

    it('should navidate using Links', async () => {
        getCurrentPath.mockReturnValueOnce('/');
        
        render(
            <Router>
                <Route path='/' Component={() => {
                    return (
                        <>
                            <h1>Home</h1>
                            <Link to='/about'>About</Link>
                        </>
                    )
                } }></Route>
                <Route path='/about' Component={() => <h1>About</h1>}></Route>
            </Router>
        )

        const btn = screen.getByText('About')
        fireEvent.click(btn);

        const aboutTitle = await screen.findByText('About');
        expect(aboutTitle).toBeTruthy();
    })
}) 