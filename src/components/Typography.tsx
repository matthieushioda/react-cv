import React, { useState } from "react";
import { Box, SxProps, Theme, Tooltip, Typography as MuiTypography, TypographyProps } from "@mui/material";

function Typography(props: TypographyProps): React.ReactElement {
	const [widthOverflowing, setOverflowing] = useState<number | undefined>(0);

	const tooltipContent = (
		<Box boxShadow={5} sx={{ backgroundColor: "common.white", width: `${widthOverflowing}px`, padding: 2 }}>
			<MuiTypography sx={{ color: "common.black" }} align="center">
				{props.children}
			</MuiTypography>
		</Box>
	);

	const onMouseEnter = (e: any) => {
		const el = e.target;
		if (el.scrollWidth > el.clientWidth) {
			setOverflowing(el.scrollWidth);
		}
	};

	const onMouseLeave = () => {
		setOverflowing(undefined);
	};

	const sxOverflow: SxProps<Theme> = {
		textOverflow: "ellipsis",
		overflow: "hidden",
		whiteSpace: "nowrap",
	};

	const typography = (
		<MuiTypography
			{...props}
			sx={props.sx ? [sxOverflow, ...(Array.isArray(props.sx) ? props.sx : [props.sx])] : sxOverflow}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{props.children}
		</MuiTypography>
	);

	return widthOverflowing ? (
		<Tooltip title={tooltipContent} enterDelay={0} placement="bottom-end">
			{typography}
		</Tooltip>
	) : (
		<>{typography}</>
	);
}

export default Typography;
