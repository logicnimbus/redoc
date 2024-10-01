/* eslint-disable import/no-internal-modules */
import * as React from 'react';
import styled from '../../styled-components';
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import { Divider } from 'antd';

const tunkBaseUrl = 'https://tunk.ai';
const tunkCdnUrl = 'https://d3tyi07qgwwvqk.cloudfront.net';
const FooterWrapper = styled.div`
  background: #fff;
  padding: 1rem 2rem;
  display: grid;
  margin: auto;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1rem;
  max-width: 1920px;
  @media (max-width: 1024px) {
    padding: 1rem;
  }
`;
const Anchor = styled.a`
  text-decoration: none;
  color: #0f3057;
`;
const Logo = styled.div`
  grid-column: span 2 / span 2;
  display: flex;

  @media (max-width: 1024px) {
    grid-column: span 12 / span 12;
  }
`;
const Image = styled.img`
  width: 133px;
  height: 52px;
  object-fit: contain;
  max-width: 100%;
`;
const LinksWrapper = styled.div`
  grid-column: span 2 / span 2;
  @media (max-width: 1024px) {
    grid-column: span 12 / span 12;
  }
`;

const VerticalList = styled.ul`
  display: flex;
  flex-direction: column;
  grid-column: span 6 / span 6;
  gap: 1.5rem;
  align-items: start;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  cursor: pointer;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  text-align: left;
  max-width: 100%;
  list-style: none;
`;
const ListSubItem = styled.li`
  cursor: pointer;
  list-style: none;
  white-space: nowrap;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: left;
  max-width: 100%;
  white-space: break-spaces;
`;
const AddressAndSocialWrapper = styled.div`
  grid-column: span 4 / span 4;
  @media (max-width: 1024px) {
    grid-column: span 12 / span 12;
  }
`;
const PolicyWrapperHorizontal = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const PolicyWrapperVertical = styled.div`
  display: none;
  gap: 0.5rem;
  align-items: start;
  flex-direction: column;
  padding: 0 1rem;
  @media (max-width: 1024px) {
    display: flex;
  }
`;

const Icon = styled.img`
  height: 20px;
  width: 20px;
`;

function TunkFooter() {
  return (
    <div
      style={{
        padding: '1rem',
        position: 'relative',
        zIndex: 0,
      }}
    >
      <FooterWrapper>
        <Logo>
          <Anchor href={tunkBaseUrl}>
            <Image src="https://d3tyi07qgwwvqk.cloudfront.net/tunk-logo.svg" />
          </Anchor>
        </Logo>
        <LinksWrapper>
          <VerticalList
            style={{
              gap: '1.5rem',
            }}
          >
            <Anchor href={`${tunkBaseUrl}`}>
              <ListItem>Home</ListItem>
            </Anchor>
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
          </VerticalList>
        </LinksWrapper>
        <LinksWrapper>
          <VerticalList
            style={{
              gap: '.5rem',
            }}
          >
            <Anchor
              style={{
                cursor: 'auto',
              }}
            >
              <ListItem>Products</ListItem>
            </Anchor>
            <Anchor href={`${tunkBaseUrl}/dashboard`}>
              <ListSubItem>AI Transcription</ListSubItem>
            </Anchor>
            <Anchor href={`${tunkBaseUrl}/human-transcription`}>
              <ListSubItem>Human Transcription</ListSubItem>
            </Anchor>
            <Anchor href={`${tunkBaseUrl}/anya`}>
              <ListSubItem>Anya</ListSubItem>
            </Anchor>
            <Anchor href={`${tunkBaseUrl}/earnings-call`}>
              <ListSubItem>Earnings Call</ListSubItem>
            </Anchor>
          </VerticalList>
        </LinksWrapper>
        <LinksWrapper>
          <VerticalList
            style={{
              gap: '.5rem',
            }}
          >
            <Anchor href={`${tunkBaseUrl}/#use-cases`}>
              <ListItem>Use Cases</ListItem>
            </Anchor>
            <Anchor>
              <ListSubItem>Business & Financial Transcription</ListSubItem>
            </Anchor>
            <Anchor>
              <ListSubItem>EduTech</ListSubItem>
            </Anchor>
            <Anchor>
              <ListSubItem>Translation Portal</ListSubItem>
            </Anchor>
            <Anchor>
              <ListSubItem>Investigative Journalism</ListSubItem>
            </Anchor>
            <Anchor>
              <ListSubItem>Medical & Legal Transcription</ListSubItem>
            </Anchor>
            <Anchor>
              <ListSubItem>Archiving Solutions</ListSubItem>
            </Anchor>
          </VerticalList>
        </LinksWrapper>
        <AddressAndSocialWrapper>
          <ul
            style={{
              padding: 0,
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '5rem',
            }}
          >
            <div>
              <ListItem
                style={{
                  marginBottom: '0.5rem',
                }}
              >
                Follow us on
              </ListItem>
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                }}
              >
                <Anchor href="https://www.facebook.com/tunkApp">
                  <Icon src={`${tunkCdnUrl}/icons/facebook.svg`} />
                </Anchor>
                <Anchor href="https://www.instagram.com/tunk_app">
                  <Icon src={`${tunkCdnUrl}/icons/instagram.svg`} />
                </Anchor>
                <Anchor href="https://x.com/tunk_ai">
                  <Icon src={`${tunkCdnUrl}/icons/twitter.svg`} />
                </Anchor>
                <Anchor href="https://www.linkedin.com/showcase/tunk-ai/">
                  <Icon src={`${tunkCdnUrl}/icons/linkedin.svg`} />
                </Anchor>
                <Anchor href="https://medium.com/@social_87723">
                  <Icon src={`${tunkCdnUrl}/icons/medium.svg`} />
                </Anchor>
              </div>
            </div>
            <div>
              <ListItem
                style={{
                  marginBottom: '0.5rem',
                }}
              >
                Contact Us
              </ListItem>
              <Anchor
                href="mailto:support@tunk.ai"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                }}
              >
                <MdOutlineMailOutline size={16} />
                <ListSubItem>support@tunk.ai</ListSubItem>
              </Anchor>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'start',
                  gap: '0.5rem',
                }}
              >
                <IoLocationOutline size={16} />
                <ListSubItem>
                  WeWork 247 Park,
                  <br /> 13th Floor, Vikhroli Corporate Park,
                  <br />
                  Hindustan C. Bus Stop, Lal Bahadur Shastri Rd,
                  <br /> Gandhi Nagar, Vikhroli West, Mumbai,
                  <br /> MH 400079/83
                </ListSubItem>
              </div>
            </div>
          </ul>
        </AddressAndSocialWrapper>
      </FooterWrapper>
      <Divider
        style={{
          background: '#0f3057',
        }}
      />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <PolicyWrapperHorizontal>
          <Anchor href={`${tunkBaseUrl}/terms-of-use`}>
            <ListSubItem>Terms & Conditions</ListSubItem>
          </Anchor>
          <div
            style={{
              height: 6,
              width: 6,
              borderRadius: '9999px',
              background: '#DAE5F2',
            }}
          />
          <ListSubItem>
            &copy; {new Date().getFullYear()} LogicNimbus Pvt Limited. All Rights reserved.
          </ListSubItem>
          <div
            style={{
              height: 6,
              width: 6,
              borderRadius: '9999px',
              background: '#DAE5F2',
            }}
          />
          <Anchor href={`${tunkBaseUrl}/data-privacy-policy`}>
            <ListSubItem>Privacy Policy</ListSubItem>
          </Anchor>
          <div
            style={{
              height: 6,
              width: 6,
              borderRadius: '9999px',
              background: '#DAE5F2',
            }}
          />
          <Anchor href={`${tunkBaseUrl}/refund-policy`}>
            <ListSubItem>Refund Policy</ListSubItem>
          </Anchor>
        </PolicyWrapperHorizontal>
        <PolicyWrapperVertical className="flex flex-col md:hidden w-full px-4 gap-2">
          <Anchor href={`${tunkBaseUrl}/terms-of-use`}>
            <ListSubItem>Terms & Conditions</ListSubItem>
          </Anchor>
          <Anchor href={`${tunkBaseUrl}/data-privacy-policy`}>
            <ListSubItem>Privacy Policy</ListSubItem>
          </Anchor>
          <Anchor href={`${tunkBaseUrl}/refund-policy`}>
            <ListSubItem>Refund Policy</ListSubItem>
          </Anchor>
          <ListSubItem>
            &copy; {new Date().getFullYear()} LogicNimbus Pvt Limited. All Rights reserved.
          </ListSubItem>
        </PolicyWrapperVertical>
      </div>
    </div>
  );
}

export default TunkFooter;
