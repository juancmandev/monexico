type Props = {
  linkList: LinkItem[];
};

export default function LinksList(props: Props) {
  return (
    <ul>
      {props.linkList.map((linkItem: LinkItem) => (
        <li>
          <a
            href={linkItem.url}
            target={
              linkItem.url.startsWith('#') || linkItem.url.startsWith('/')
                ? '_blank'
                : '_self'
            }
          >
            {linkItem.label}
          </a>
          {linkItem.description && ' - '}
          {linkItem.description && <span>{linkItem.description}</span>}
        </li>
      ))}
    </ul>
  );
}
