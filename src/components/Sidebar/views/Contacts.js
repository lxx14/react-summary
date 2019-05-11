import React from 'react';

const Contacts = () => {
  return(
    <div className='contacts-container'>
    <ul className='contacts-list'>
      <li><i className="fab fa-google"></i>lxx1427@gmail.com</li>
      <li><i className="fas fa-phone"></i>+38(093)-989-08-17</li>
      <li><i className="fab fa-telegram"></i> <a href="https://t.me/lxx1427" target="blank">Telegram</a></li>
      <li><i className="fab fa-facebook-square"></i> <a href="https://www.facebook.com/leks.lilch" target="blank"> Facebook</a></li>
      <li><i className="fab fa-viber"></i><a href="viber://chat?number=380939890817" target="blank">Viber</a></li>
      <li><i className="fab fa-skype"></i><a href="skype:live:f2024932cda66868?chat">Alexey Ilch</a></li>
      <li><i className="fab fa-bitbucket"></i> <a href="https://lxx1427@bitbucket.org" target="blank">Bitbucket</a></li>
      <li><i className="fab fa-github-square"></i> <a href="https://github.com/lxx14?tab=repositories" target="blank">GitHub</a></li>
      <li></li>
      <li></li>
    </ul>
    </div>
  )
}

export default Contacts;