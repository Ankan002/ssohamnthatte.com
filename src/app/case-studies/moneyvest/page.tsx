import { Column, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "MoneyVest Finance App – Case Study",
    description: "Deep-dive into the MoneyVest finance app redesign.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("MoneyVest Case Study")}`,
    path: "/case-studies/moneyvest",
  });
}

export default function MoneyVestCaseStudy() {
  return (
    <Column maxWidth="m" gap="l" paddingY="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="MoneyVest Finance App – Case Study"
        description="Deep-dive into the MoneyVest finance app redesign."
        path="/case-studies/moneyvest"
        image={`/api/og/generate?title=${encodeURIComponent("MoneyVest Case Study")}`}
        author={{
          name: person.name,
          url: `${baseURL}/case-studies/moneyvest`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Text variant="heading-default-l" onBackground="neutral-weak">
        Case study content coming soon.
      </Text>
    </Column>
  );
}





