import React, { useEffect, useState } from 'react';

//Icons
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

//Component
import { Container } from '../Container';

//Style
import { HeaderEl, Wrapper, Title, ThemeSwitcher } from './header-style';

export const Header = () => {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

	useEffect(() => {
		document.body.setAttribute('data-theme', theme);
	}, [theme]);

	return (
		<HeaderEl>
			<Container>
				<Wrapper>
					<Title>Where is the world?</Title>
					<ThemeSwitcher onClick={toggleTheme}>
						{theme === 'light' ? (
							<IoMoonOutline size='16px' />
						) : (
							<IoMoon size='16px' />
						)}
						<span style={{ marginLeft: '0.5rem' }}>{theme}</span> Theme
					</ThemeSwitcher>
				</Wrapper>
			</Container>
		</HeaderEl>
	);
};
