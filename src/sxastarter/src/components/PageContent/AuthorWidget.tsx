import React from 'react';
import {
  Field,
  ImageField,
  Text,
  withDatasourceCheck,
  ComponentParams,
  ComponentRendering,
  LinkField,
  Link,
  NextImage,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Name: Field<string>;
  Position: Field<string>;
  Photo: ImageField;
  SocialLink1: LinkField;
  SocialIcon1: ImageField;
  SocialLink2: LinkField;
  SocialIcon2: ImageField;
  SocialLink3: LinkField;
  SocialIcon3: ImageField;
}

export type AuthorWidgetProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const AuthorWidgetDefault = (props: AuthorWidgetProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component author-widget ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="author-card row g-0">
        <div className="col-auto">
          <NextImage field={props.fields.Photo} className="author-img" width={48} height={48} />
        </div>
        <div className="col">
          <h6 className="author-name">
            <Text field={props.fields.Name} />
          </h6>
          <p className="author-position">
            <Text field={props.fields.Position} />
          </p>
        </div>
      </div>
    </div>
  );
};

const AuthorWidgetCompact = (props: AuthorWidgetProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component author-widget compact ${props.params.styles?.trimEnd() || ''}`}
      id={id || undefined}
    >
      <div className="author-card d-flex align-items-center p-2 border rounded">
        <NextImage field={props.fields.Photo} className="author-img me-2" width={40} height={40} />
        <div>
          <h6 className="author-name mb-0">
            <Text field={props.fields.Name} />
          </h6>
          <small className="author-position text-muted">
            <Text field={props.fields.Position} />
          </small>
        </div>
      </div>
    </div>
  );
};

const AuthorWidgetCompactRight = (props: AuthorWidgetProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component author-widget compact right ${props.params.styles?.trimEnd() || ''}`}
      id={id || undefined}
    >
      <div className="author-card d-flex align-items-center flex-row-reverse">
        <NextImage
          field={props.fields.Photo}
          className="author-img ms-2 flex-shrink-0"
          width={40}
          height={40}
        />
        <div className="d-flex flex-column flex-grow-1 text-start">
          <h6 className="author-name mb-0 text-start">
            <Text field={props.fields.Name} />
          </h6>
          <small className="author-position text-muted text-start">
            <Text field={props.fields.Position} />
          </small>
        </div>
      </div>
    </div>
  );
};

const AuthorWidgetWithSocials = (props: AuthorWidgetProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component author-widget with-socials ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="author-card row g-0">
        <div className="col-auto">
          <NextImage field={props.fields.Photo} className="author-img" width={80} height={80} />
        </div>
        <div className="col">
          <h6 className="author-name">
            <Text field={props.fields.Name} />
          </h6>
          <p className="author-position">
            <Text field={props.fields.Position} />
          </p>
        </div>
        <div className="col-12 col-md-auto">
          <div className="social-links">
            <Link field={props.fields?.SocialLink1}>
              <NextImage field={props.fields?.SocialIcon1} width={16} height={16} />
            </Link>
            <Link field={props.fields?.SocialLink2}>
              <NextImage field={props.fields?.SocialIcon2} width={16} height={16} />
            </Link>
            <Link field={props.fields?.SocialLink3}>
              <NextImage field={props.fields?.SocialIcon3} width={16} height={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Default = withDatasourceCheck()<AuthorWidgetProps>(AuthorWidgetDefault);
export const Compact = withDatasourceCheck()<AuthorWidgetProps>(AuthorWidgetCompact);
export const CompactRight = withDatasourceCheck()<AuthorWidgetProps>(AuthorWidgetCompactRight);
export const WithSocials = withDatasourceCheck()<AuthorWidgetProps>(AuthorWidgetWithSocials);
