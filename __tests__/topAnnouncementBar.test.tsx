import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TopAnnouncementBar from '../app/components/topAnnouncementBar'
 
describe('TopAnnouncementBar', () => {
  it('Contact Us text is present', () => {
    const { getByText } = render(<TopAnnouncementBar />);
    const contactUsLink = getByText('Contact Us');
    expect(contactUsLink).toBeInTheDocument();
    // expect(contactUsLink.tagName).toBe('A');
    // expect(contactUsLink.getAttribute('href')).toBeTruthy();
  })
})