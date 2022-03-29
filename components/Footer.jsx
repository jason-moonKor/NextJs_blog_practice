import {Col, Row} from "antd";

export default function Footer() {
	return (
		<Row
			align="middle"
			style={{
				height: 50,
				textAlign: "center"
			}}
		>
			<Col span={24}>
				<p> 2022 Jason Moon. All rights reserved.</p>
			</Col>
		</Row>
	);
}
