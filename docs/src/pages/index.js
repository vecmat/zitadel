import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import ThemedImage from "@theme/ThemedImage";
import clsx from "clsx";
import React from "react";
import Translate ,{translate}from '@docusaurus/Translate';

import Column from "../components/column";
import {
  HomeListWrapper,
  ICONTYPE,
  ListElement,
  ListWrapper,
} from "../components/list";
import styles from "./styles.module.css";

const features = [
  {
    title: "Guides",
    darkImageUrl: "img/index/Guides-dark.svg",
    lightImageUrl: "img/index/Guides-light.svg",
    link: "docs/guides/overview",
    description: (
      <Translate>
        Read our guides on how to manage your data and role associations in
        ZITADEL and on what we recommend.
      </Translate>
    ),
    content: (
      <ListWrapper>
        <Column>
          <div>
            <ListElement
              link="docs/guides/start/quickstart"
              type={ICONTYPE.START}
              title={translate({
                message: "Get started"
              })}
              description=""
            />
            <ListElement
              link="docs/guides/manage/cloud/overview"
              type={ICONTYPE.LOGIN}
              title="ZITADEL Cloud"
              description=""
            />
            <ListElement
              link="docs/guides/integrate/login-users"
              type={ICONTYPE.LOGIN}
              title={translate({
                message: "Login Users"
              })}
              description=""
            />
            <ListElement
              link="docs/guides/integrate/access-zitadel-apis"
              type={ICONTYPE.APIS}
              title={translate({
                message: "Access APIs"
              })}
              description=""
            />
          </div>
          <div>
            <ListElement
              link="docs/guides/solution-scenarios/introduction"
              iconClasses="las la-paragraph"
              roundClasses="rounded rounded-split"
              label="B2C"
              title={translate({
                message: "Solution Scenarios"
              })}
              description=""
            />
            <ListElement
              link="docs/guides/manage/customize/branding"
              type={ICONTYPE.PRIVATELABELING}
              title={translate({
                message: "Customization"
              })}
              description=""
            />
            <ListElement
              link="docs/guides/deploy/overview"
              type={ICONTYPE.SYSTEM}
              title={translate({
                message: "Deploy"
              })}
              description=""
            />
            <ListElement
              link="docs/guides/trainings/introduction"
              type={ICONTYPE.STORAGE}
              title={translate({
                message: "Trainings"
              })}
              description=""
            />
          </div>
        </Column>
      </ListWrapper>
    ),
  },
  {
    title: "Quickstarts",
    darkImageUrl: "img/index/Quickstarts-dark.svg",
    lightImageUrl: "img/index/Quickstarts-light.svg",
    link: "docs/examples/introduction",
    description: (
      <Translate>
        Learn how to integrate your applications and build secure workflows and
        APIs with ZITADEL
      </Translate>
    ),
    content: (
      <div className={styles.quickstartcontainer}>
        <QuickstartLink
          link="/docs/examples/login/angular"
          imageSource="/img/tech/angular.svg"
          title="Angular"
          description="Add the user login to your application and query some data from the userinfo endpoint"
        />
        <QuickstartLink
          link="/docs/examples/login/react"
          imageSource="/img/tech/react.png"
          title="React"
          description="Logs into your application and queries some data from the userinfo endpoint"
        />
        <QuickstartLink
          link="/docs/examples/login/flutter"
          imageSource="/img/tech/flutter.svg"
          title="Flutter"
          description="Mobile Application working for iOS and Android that authenticates your user."
        />
        <QuickstartLink
          link="/docs/examples/login/nextjs"
          imageSource="/img/tech/nextjslight.svg"
          lightImageSource="/img/tech/nextjs.svg"
          title="NextJS"
          description="A simple application to log into your user account and query some data from User endpoint."
        />
      </div>
    ),
  },
  {
    title: "APIs",
    darkImageUrl: "img/index/APIs-dark.svg",
    lightImageUrl: "img/index/APIs-light.svg",
    link: "/docs/apis/introduction",
    description: (
      <Translate>Learn more about our APIs and how to integrate them in your apps.</Translate>
    ),
    content: (
      <div className={styles.apilinks}>
        <ListWrapper>
          <ListElement
            link="./docs/apis/proto/auth"
            type={ICONTYPE.APIS}
            title={translate({
                message: "Proto Definitions"
              })}
            description=""
          />
          <ListElement
            link="./docs/apis/openidoauth/endpoints"
            type={ICONTYPE.APIS}
            title={translate({
                message: "OpenID Connect and OAuth"
              })}
            description={translate({
                message: "Scopes, Claims, Authentication Methods, Grant Types"
              })}
          />
        </ListWrapper>
      </div>
    ),
  },
  {
    title: "Concepts",
    darkImageUrl: "img/index/Concepts-dark.svg",
    lightImageUrl: "img/index/Concepts-light.svg",
    link: "docs/concepts/introduction",
    description: (
      <Translate>
        Learn more about engineering and design principles, ZITADELs
        architecture and used technologies.
      </Translate>
    ),
    content: (
      <ListWrapper>
        <ListElement
          link="./docs/concepts/principles"
          type={ICONTYPE.TASKS}
          title={translate({
            message: "Principles"
          })}
          description={translate({
            message: "Design and engineering principles"
          })}
        />
        <ListElement
          link="./docs/concepts/architecture/software"
          type={ICONTYPE.ARCHITECTURE}
          title={translate({
            message: "Architecture"
          })}
          description={translate({
            message: "Sotware-, Cluster- and Multi Cluster Architecture"
          })}
        />
        <ListElement
          link="./docs/concepts/structure/overview"
          type={ICONTYPE.ARCHITECTURE}
          title={translate({
            message: "Structure"
          })}
          description={translate({
            message: "Object structure of ZITADEL"
          })}
        />
      </ListWrapper>
    ),
  },
];

function QuickstartLink({ link, title, imageSource, lightImageSource }) {
  return (
    <Link href={link} className={clsx("", styles.quickstart)}>
      {/* <img className={styles.quickstartlinkimg} src={imageSource} alt={`${title}`}/> */}
      <ThemedImage
        className={styles.quickstartlinkimg}
        alt={title}
        sources={{
          light: lightImageSource ? lightImageSource : imageSource,
          dark: imageSource,
        }}
      />
      <p>{title}</p>
    </Link>
  );
}

function Feature({
  darkImageUrl,
  lightImageUrl,
  title,
  description,
  link,
  content,
}) {
  const darkImgUrl = useBaseUrl(darkImageUrl);
  const lightImgUrl = useBaseUrl(lightImageUrl);

  const themedImage = (
    <ThemedImage
      className={styles.featureImage}
      alt={title}
      sources={{
        light: lightImgUrl,
        dark: darkImgUrl,
      }}
    />
  );
  return (
    <div className={clsx("col col--6 docs-link", styles.feature)}>
      {darkImgUrl && lightImgUrl && (
        <div className="">
          <HomeListWrapper image={themedImage}>
            <Link to={useBaseUrl(link)}>
              <h3 className={styles.homelink}>
                {title}
                <i
                  className={clsx("las la-angle-right", styles.homelinkicon)}
                ></i>
              </h3>
            </Link>
            <p className="">{description}</p>

            {content}
          </HomeListWrapper>
        </div>
      )}
    </div>
  );
}

const Gigi = () => {
  return (
    
      <div className={styles.gigiwrapper}>
        <div className={styles.gigiwrapperrelative}>
          <img height="151px" width="256px" src="/img/gigi.svg" />
          <div className={styles.gigibanner}>ZITADEL Cloud OUT NOW! 🚀</div>
        </div>
      </div>
    
  );
};

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      description={`${siteConfig.customFields.description}`}
    >
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--lg get-started",
                styles.getStarted
              )}
              to={useBaseUrl("docs/guides/start/quickstart")}
            >
              Get Started
            </Link>
          </div>
        </div>
        <Link to="https://zitadel.com">
          <Gigi />
        </Link>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
