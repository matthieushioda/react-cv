﻿import React from "react";
import { Theme, SxProps } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import Grid, { GridSize } from "@mui/material/Grid";

import { NoValue } from "../utils/Parameters";

import Typography from "./Typography";

interface LabelValuePropsBase {
	label: string;
	value?: string | Date | number | React.ReactElement | undefined;
	valueSx?: SxProps<Theme>;
	valueBrush?: string;
	labelValueSpacing?: number;
	labelColumnSize?: GridSize;
	valueColumnSize?: GridSize;
}

export type LabelValueProps = LabelValuePropsBase & BoxProps;

function LabelValue({
	label,
	value,
	valueBrush,
	labelValueSpacing,
	labelColumnSize,
	valueColumnSize,
	valueSx,
	...otherProps
}: LabelValueProps): React.ReactElement {
	const isReactElement = React.isValidElement(value);
	const labelMargin = labelValueSpacing ?? 5;
	const autoSize: GridSize = "auto";
	const labelSize =
		labelColumnSize ??
		((valueColumnSize ? (valueColumnSize === autoSize ? autoSize : 12 - valueColumnSize) : 5) as GridSize);
	const valueSize = valueColumnSize ?? ((labelSize === autoSize ? autoSize : 12 - labelSize) as GridSize);

	return (
		<Box {...otherProps}>
			<Grid container>
				<Grid item xs={labelSize}>
					<Typography variant="formLabel" sx={{ marginRight: labelMargin }}>
						{label}
					</Typography>
				</Grid>
				<Grid item xs={valueSize}>
					<Box
						sx={{
							...valueSx,
						}}
					>
						{isReactElement && value}
						{!isReactElement && (
							<Typography
								variant="formValue"
								sx={{ color: (theme) => valueBrush ?? theme.palette.common.black }}
							>
								{value?.toString() ?? NoValue}
							</Typography>
						)}
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}

export default LabelValue;
