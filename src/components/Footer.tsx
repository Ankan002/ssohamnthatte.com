import { Flex, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Footer Content */}
      <div className={styles.footerContent}>
        {/* Copyright Text */}
        <div className={styles.copyright}>
          <Text variant="body-default-s" className={styles.copyrightText}>
            ©{currentYear} • {person.name}
          </Text>
        </div>

        {/* Floating Social Icons */}
        <div className={styles.socialContainer}>
          {social.map((item) =>
            item.link && (
              <div key={item.name} className={styles.socialIconWrapper}>
                <IconButton
                  href={item.link}
                  icon={item.icon}
                  size="m"
                  variant="ghost"
                  className={styles.socialIcon}
                />
                {/* Popup Tooltip */}
                <div className={`${styles.tooltip} ${styles[item.type]}`}>
                  <span className={styles.tooltipText}>{item.popup}</span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </footer>
  );
};
