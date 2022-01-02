import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { HandIcon, PlanIcon, ShieldIcon } from "../assets";
import { AboutItems } from "./AboutItems";
import { ImageBox } from "./ImageBox";
import { AboutWrapper, GridWrapper } from "./Style";

export const About: React.FC = () => {
  return (
    <AboutWrapper
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: "10.25rem",
        pb: "27.0625rem",
      }}
    >
      <Grid item xs={9}>
        <Box
          sx={{ fontSize: "1.125rem", mb: "4.9375rem", textAlign: "center" }}
        >
          گروه پیکان پارس با ارائه برترین برندهای موجود، گام بلندی را جهت کسب
          جایگاه ممتاز در حوزه تامین قطعات یدکی خودرو برداشته است
        </Box>
      </Grid>
      <GridWrapper
        container
        sx={{
          bgcolor: "white",
          padding: "2.5rem 6.8125rem",
          width: "90%",
        }}
      >
        <Grid item xs={12}>
          <AboutItems
            title="رسالت يا بيانيه گروه پیکان پارس"
            description="موفقيت ما بر مبناي رضايت مستمر زنجيره ارزش آفريني (مصرف كنندگان
            نهايي، مشتريان، كاركنان، تامين كنندگان و سهامداران) در راستاي چشم
            انداز گروه پیکان پارس براي تبديل شدن به شرکتی با برندهای برتر در
            بازارهاي هدف مي باشد. ما به تغيير و نوآوري با ايجاد سازمان ياد
            گيرنده و سازمان تند آموز اهميت ويژه مي دهيم. ما به وجوه تمايزمان
            وفادار خواهيم ماند. ما اعتقاد داريم كيفيت مستمر در محصولات و خدمات
            جزء نيازهاي پايه مشتريانمان مي باشد. ما اهميت مشتريان برون و درون
            سازماني را درك كرده و در تمام برنامه ها و اقداماتمان رعايت خواهيم
            كرد."
            icon={<PlanIcon />}
          />
        </Grid>
        <Grid item xs={12}>
          <AboutItems
            title="رسالت يا بيانيه گروه پیکان پارس"
            description="موفقيت ما بر مبناي رضايت مستمر زنجيره ارزش آفريني (مصرف كنندگان
            نهايي، مشتريان، كاركنان، تامين كنندگان و سهامداران) در راستاي چشم
            انداز گروه پیکان پارس براي تبديل شدن به شرکتی با برندهای برتر در
            بازارهاي هدف مي باشد. ما به تغيير و نوآوري با ايجاد سازمان ياد
            گيرنده و سازمان تند آموز اهميت ويژه مي دهيم. ما به وجوه تمايزمان
            وفادار خواهيم ماند. ما اعتقاد داريم كيفيت مستمر در محصولات و خدمات
            جزء نيازهاي پايه مشتريانمان مي باشد. ما اهميت مشتريان برون و درون
            سازماني را درك كرده و در تمام برنامه ها و اقداماتمان رعايت خواهيم
            كرد."
            icon={<HandIcon />}
            even="true"
          />
        </Grid>
        <Grid item xs={12}>
          <AboutItems
            title="رسالت يا بيانيه گروه پیکان پارس"
            description="موفقيت ما بر مبناي رضايت مستمر زنجيره ارزش آفريني (مصرف كنندگان
            نهايي، مشتريان، كاركنان، تامين كنندگان و سهامداران) در راستاي چشم
            انداز گروه پیکان پارس براي تبديل شدن به شرکتی با برندهای برتر در
            بازارهاي هدف مي باشد. ما به تغيير و نوآوري با ايجاد سازمان ياد
            گيرنده و سازمان تند آموز اهميت ويژه مي دهيم. ما به وجوه تمايزمان
            وفادار خواهيم ماند. ما اعتقاد داريم كيفيت مستمر در محصولات و خدمات
            جزء نيازهاي پايه مشتريانمان مي باشد. ما اهميت مشتريان برون و درون
            سازماني را درك كرده و در تمام برنامه ها و اقداماتمان رعايت خواهيم
            كرد."
            icon={<ShieldIcon />}
          />
        </Grid>
        <Grid item xs={12}>
          <AboutItems
            title="رسالت يا بيانيه گروه پیکان پارس"
            description="موفقيت ما بر مبناي رضايت مستمر زنجيره ارزش آفريني (مصرف كنندگان
            نهايي، مشتريان، كاركنان، تامين كنندگان و سهامداران) در راستاي چشم
            انداز گروه پیکان پارس براي تبديل شدن به شرکتی با برندهای برتر در
            بازارهاي هدف مي باشد. ما به تغيير و نوآوري با ايجاد سازمان ياد
            گيرنده و سازمان تند آموز اهميت ويژه مي دهيم. ما به وجوه تمايزمان
            وفادار خواهيم ماند. ما اعتقاد داريم كيفيت مستمر در محصولات و خدمات
            جزء نيازهاي پايه مشتريانمان مي باشد. ما اهميت مشتريان برون و درون
            سازماني را درك كرده و در تمام برنامه ها و اقداماتمان رعايت خواهيم
            كرد."
            icon={<PlanIcon />}
            even="true"
          />
        </Grid>
        <Box
          sx={{
            fontWeight: "600",
            fontSize: "1.125rem",
            textAlign: "center",
            width: "100%",
            marginBottom: "5.0625rem",
            marginTop: "3.25rem",
          }}
        >
          افتخارات پیکان پارس
        </Box>
        <ImageBox />
      </GridWrapper>
    </AboutWrapper>
  );
};