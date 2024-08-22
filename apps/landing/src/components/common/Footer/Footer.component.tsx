import { createSvgUrl } from 'constant';
import Image from 'next/image';
import { MashUpLogo } from 'ui';

import * as Styled from './Footer.styled';

const Footer = () => (
  <Styled.Footer>
    <Styled.MashUpHeading>
      <MashUpLogo />
      <Styled.MashUpText>Mash-Up</Styled.MashUpText>
    </Styled.MashUpHeading>

    <Styled.EtcItemsWrapper>
      <Styled.ExternalLinkWrapper>
        <a
          href="https://github.com/mash-up-kr/"
          target="_blank"
          rel="noreferrer"
          aria-label="mash up github"
        >
          <Image src={createSvgUrl('common')('github-dark')} alt="" width={32} height={32} />
        </a>
        <a href="mailto:recruit.mashup@gmail.com" aria-label="mash up email">
          <Image src={createSvgUrl('common')('mail-dark')} alt="" width={32} height={32} />
        </a>
        <a
          href="https://mash-up.tistory.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="mash up tistory"
        >
          <Image src={createSvgUrl('common')('tistory-dark')} alt="" width={32} height={32} />
        </a>
        <a
          href="https://www.behance.net/Mash-Up/"
          target="_blank"
          rel="noreferrer"
          aria-label="mash up behance"
        >
          <Image src={createSvgUrl('common')('behance-dark')} alt="" width={32} height={32} />
        </a>
        <a
          href="https://www.facebook.com/mashupgroup/"
          target="_blank"
          rel="noreferrer"
          aria-label="mash up facebook"
        >
          <Image src={createSvgUrl('common')('facebook-dark')} alt="" width={32} height={32} />
        </a>
        <a
          href="https://www.instagram.com/official_mashup_/"
          target="_blank"
          rel="noreferrer"
          aria-label="mash up instagram"
        >
          <Image src={createSvgUrl('common')('instagram-dark')} alt="" width={32} height={32} />
        </a>
      </Styled.ExternalLinkWrapper>
      <Styled.CopyRight>© Mash-Up 2024. Made in Seoul.</Styled.CopyRight>
    </Styled.EtcItemsWrapper>
  </Styled.Footer>
);

export default Footer;
