/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';
import styled from '../../styled-components';
import { Dropdown, MenuProps } from 'antd';

const tunkBaseUrl = 'https://tunk.ai';

const NavbarWrapper = styled.div`
  background: #fff;
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1rem;
  @media (max-width: 760px) {
    padding: 1rem;
  }
`;
const Image = styled.img`
  width: 133px;
  height: 52px;
  object-fit: contain;
  max-width: 100%;
`;
const List = styled.ul`
  display: flex;
  grid-column: span 6 / span 6;
  gap: 1.5rem;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  @media (max-width: 760px) {
    display: none;
  }
`;
const ListItem = styled.li`
  cursor: pointer;
  white-space: nowrap;
  font-size: 1rem;
  line-height: 1.5rem;
`;
const Anchor = styled.a`
  text-decoration: none;
  color: #0f3057;
`;
const Logo = styled.div`
  grid-column: span 2 / span 2;
  display: flex;
  align-items: center;
  @media (max-width: 760px) {
    grid-column: span 4 / span 4;
  }
`;

const Icon = styled.svg`
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

const ProductListWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
`;

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Anchor href={tunkBaseUrl}>
        <div className="px-2 py-2 text-base text-primaryDark">AI Transcription</div>
      </Anchor>
    ),
  },
  {
    key: '2',
    label: (
      <Anchor href={tunkBaseUrl}>
        <div className="px-2 py-2 text-base text-primaryDark">Human Transcription</div>
      </Anchor>
    ),
  },
  {
    key: '3',
    label: (
      <Anchor href={tunkBaseUrl}>
        <div className="px-2 py-2 text-base text-primaryDark">Anya</div>
      </Anchor>
    ),
  },
  {
    key: '4',
    label: (
      <Anchor href={tunkBaseUrl}>
        <div className="px-2 py-2 text-base text-primaryDark">Earnings Call</div>
      </Anchor>
    ),
  },
];

function TunkNavbar() {
  return (
    <NavbarWrapper>
      <Logo>
        <Anchor href={tunkBaseUrl}>
          <Image src="https://d3tyi07qgwwvqk.cloudfront.net/tunk-logo.svg" />
        </Anchor>
      </Logo>
      <List>
        <Anchor href={tunkBaseUrl}>
          <ListItem>Home</ListItem>
        </Anchor>
        <Dropdown menu={{ items }}>
          <ProductListWrapper>
            <ListItem>Products</ListItem>
            <Icon
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
            </Icon>
          </ProductListWrapper>
        </Dropdown>
        <Anchor href={`${tunkBaseUrl}/about-us`}>
          <ListItem>About Us</ListItem>
        </Anchor>
        <Anchor href={`${tunkBaseUrl}/pricing`}>
          <ListItem>Pricing</ListItem>
        </Anchor>
        <Anchor href="https://www.blog.tunk.ai">
          <ListItem>Blog</ListItem>
        </Anchor>
        <Anchor href={`${tunkBaseUrl}/contact-us`}>
          <ListItem>Contact Us</ListItem>
        </Anchor>
      </List>
    </NavbarWrapper>
  );
}

export default TunkNavbar;
